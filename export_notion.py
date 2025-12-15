import csv, sys

class Koala:
    def __init__(self, name='', locate='', sex='', father='', mother='', birthday='', deadday=''):
        self.name = name
        self.locate = locate
        self.sex = sex
        self.father = father
        self.mother = mother
        self.birthday = birthday
        self.deadday = deadday
        self.partner = []

        if sex == 'オス':
            self.sex = 'male'
        elif sex == 'メス':
            self.sex = 'female'
    
    def disp(self):
        print(self.__dict__)

def update_partner(koalas):
    for key in koalas.keys():
        tmp = koalas[key]
        koalas[tmp.father].partner.append(tmp.mother)
        koalas[tmp.father].partner = list(set(koalas[tmp.father].partner))
        koalas[tmp.mother].partner.append(tmp.father)
        koalas[tmp.mother].partner = list(set(koalas[tmp.mother].partner))

def write_js(koalas):
    keys = list(koalas.keys())
    ids = {}
    for i,k in enumerate(keys):
        ids[k] = i

    with open('data.js', 'w') as f:
        f.write(f"const familyData = [\n")
        for k in keys:
            tmp = koalas[k]
            f.write("  {\n")
            f.write(f'    id: {ids[k]},\n')
            pids = [str(ids[k]) for k in tmp.partner]
            pids_str = ",".join(pids)
            f.write(f'    name: "{k}",\n')
            if tmp.father != '':
                f.write(f'    fid: {ids[tmp.father]},\n')
                f.write(f'    mid: {ids[tmp.mother]},\n')
            f.write(f'    pids: [{pids_str}],\n')
            f.write(f'    gender: "{tmp.sex}",\n')
            if tmp.deadday == '':
                f.write(f'    born: "{tmp.birthday}",\n')
            else: # 亡くなっている個体
                f.write(f'    born: "{tmp.birthday}-{tmp.deadday}",\n')
            f.write(f'    locate: "{tmp.locate}",\n')
            f.write('  },\n')
        f.write('];\n\nwindow.familyData = familyData;')

koalas = {}
with open('./export.csv') as f:
    reader = csv.reader(f)
    for i,r in enumerate(reader):
        if i > 0:
            print(r[1])
            assert(r[1] not in koalas.keys())
            tmp = Koala(
                name=r[1],
                locate=r[2],
                sex=r[4],
                father=r[6].split(' ')[0],
                mother=r[7].split(' ')[0],
                birthday=r[8],
                deadday=r[11],
            )
            koalas[r[1]] = tmp

update_partner(koalas)
write_js(koalas)