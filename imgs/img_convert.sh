#!/bin/bash
for f in `ls *.JPG *.jpg`;do
    target=`echo $f | sed 's/\.[^\.]*$//'`
    echo $target
    convert -resize 300x300 $f $target.png
    rm -rfv $f
done