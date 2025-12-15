#!/bin/bash
# png以外のデータを変換
for f in `ls imgs/*.JPG imgs/*.jpg`;do
    target=`echo $f | sed 's/\.[^\.]*$//'`
    echo $target
    convert -resize 300x300 $f $target.png
    rm -rfv $f
done