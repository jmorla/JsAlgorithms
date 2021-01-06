#!/bin/sh 

#
# @author jcarlos
#

P1=$1
P2=$2
findsrc=$(find . -maxdepth 1 -type d -name 'src' 2>/dev/null) 
rutasrc=$(echo $findsrc | sed "s/[./]//g")


if [[ $rutasrc = src ]];then 
# creates the Js test file
	echo -e "\e[92mEXCELENTE\e[0m Usted tiene un directorio de trabajo en! [$findsrc]"
		mkdir $(pwd)/$rutasrc/$P1 &&\
			echo -e "const { $P2 } = require(\"./$P1\");\n\ndescribe(\"$P1\", () => {\n    test(\"Should return undefined\", () => {\n        expect($P2()).toBe(undefined);\n    });\n});" 1> $(pwd)/$rutasrc/$P1/$P1.test.js
# creates the js	
	echo -e "exports.$P2 = () => {\n\n};" 1> $(pwd)/$rutasrc/$P1/$P1.js 
else	
	echo -e "\e[0m\e[91mERROR\e[0m Usted no tiene un directorio de proyecto cerca!"

fi