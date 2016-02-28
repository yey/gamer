##scripts for games I play##

###list###
* MTG_getImgPkg.js



** some script for games I play **


make a shell

curl url：

http://www.iplaymtg.com/app/api/magic.php?action=getMagicCard&id=22415

1,cid start from the first one card and end the last one
ori:22415-22691 272
dtk:21902-22165 264
frf:21717-21901 165

ktk:21111-21379 269

2,fetch English name of card from return page
<div class="mtg-cardEName">Moutain</div>

3,make a list with num & Ename & img

4,rename img with Ename.full.jpg


http://www.iplaymtg.com/app/img/magic/card/SC/ORI/125.jpg

grep oldString -rl /path | xargs sed -i "s/oldString/newString/g"



http://data.iplaymtg.com/app/img/magic/card/SC/ORI/36.jpg
