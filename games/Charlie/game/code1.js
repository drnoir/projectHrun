gdjs.dungeonCode = {};
gdjs.dungeonCode.localVariables = [];
gdjs.dungeonCode.GDcontinue_9595buttonObjects1_1final = [];

gdjs.dungeonCode.GDNewSpriteObjects1= [];
gdjs.dungeonCode.GDNewSpriteObjects2= [];
gdjs.dungeonCode.GDNewSpriteObjects3= [];
gdjs.dungeonCode.GDDialogue_9595text1Objects1= [];
gdjs.dungeonCode.GDDialogue_9595text1Objects2= [];
gdjs.dungeonCode.GDDialogue_9595text1Objects3= [];
gdjs.dungeonCode.GDcontinue_9595buttonObjects1= [];
gdjs.dungeonCode.GDcontinue_9595buttonObjects2= [];
gdjs.dungeonCode.GDcontinue_9595buttonObjects3= [];
gdjs.dungeonCode.GDSummoning_9595circlesObjects1= [];
gdjs.dungeonCode.GDSummoning_9595circlesObjects2= [];
gdjs.dungeonCode.GDSummoning_9595circlesObjects3= [];
gdjs.dungeonCode.GDplayerObjects1= [];
gdjs.dungeonCode.GDplayerObjects2= [];
gdjs.dungeonCode.GDplayerObjects3= [];
gdjs.dungeonCode.GDdungeon_9595backgroundObjects1= [];
gdjs.dungeonCode.GDdungeon_9595backgroundObjects2= [];
gdjs.dungeonCode.GDdungeon_9595backgroundObjects3= [];
gdjs.dungeonCode.GDPlatformObjects1= [];
gdjs.dungeonCode.GDPlatformObjects2= [];
gdjs.dungeonCode.GDPlatformObjects3= [];
gdjs.dungeonCode.GDborderObjects1= [];
gdjs.dungeonCode.GDborderObjects2= [];
gdjs.dungeonCode.GDborderObjects3= [];
gdjs.dungeonCode.GDJumpButtonObjects1= [];
gdjs.dungeonCode.GDJumpButtonObjects2= [];
gdjs.dungeonCode.GDJumpButtonObjects3= [];
gdjs.dungeonCode.GDJoystickObjects1= [];
gdjs.dungeonCode.GDJoystickObjects2= [];
gdjs.dungeonCode.GDJoystickObjects3= [];
gdjs.dungeonCode.GDfireball_9595joystick_9595Objects1= [];
gdjs.dungeonCode.GDfireball_9595joystick_9595Objects2= [];
gdjs.dungeonCode.GDfireball_9595joystick_9595Objects3= [];
gdjs.dungeonCode.GDiceblast_9595joystickObjects1= [];
gdjs.dungeonCode.GDiceblast_9595joystickObjects2= [];
gdjs.dungeonCode.GDiceblast_9595joystickObjects3= [];


gdjs.dungeonCode.mapOfGDgdjs_9546dungeonCode_9546GDSummoning_95959595circlesObjects1Objects = Hashtable.newFrom({"Summoning_circles": gdjs.dungeonCode.GDSummoning_9595circlesObjects1});
gdjs.dungeonCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() < 10);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() >= 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() < 15);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() > 15);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(2);
}}

}


};gdjs.dungeonCode.mapOfGDgdjs_9546dungeonCode_9546GDSummoning_95959595circlesObjects1Objects = Hashtable.newFrom({"Summoning_circles": gdjs.dungeonCode.GDSummoning_9595circlesObjects1});
gdjs.dungeonCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() < 10);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue_text1"), gdjs.dungeonCode.GDDialogue_9595text1Objects2);
{for(var i = 0, len = gdjs.dungeonCode.GDDialogue_9595text1Objects2.length ;i < len;++i) {
    gdjs.dungeonCode.GDDialogue_9595text1Objects2[i].getBehavior("Text").setText("DUNGEON KEEPER: ARTHUR YOU MUST BRING ICE FRAGMENTS BACK TO ME IF YOU WANT TO HELP (FIND 15 ICE FRAGMENTS)");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() >= 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() < 15);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue_text1"), gdjs.dungeonCode.GDDialogue_9595text1Objects2);
{for(var i = 0, len = gdjs.dungeonCode.GDDialogue_9595text1Objects2.length ;i < len;++i) {
    gdjs.dungeonCode.GDDialogue_9595text1Objects2[i].getBehavior("Text").setText("DUNGEON KEEPER: WOW , YOUVE ACTUALLY BROUGHT SOME BUT I NEED MORE");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() > 15);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue_text1"), gdjs.dungeonCode.GDDialogue_9595text1Objects1);
{for(var i = 0, len = gdjs.dungeonCode.GDDialogue_9595text1Objects1.length ;i < len;++i) {
    gdjs.dungeonCode.GDDialogue_9595text1Objects1[i].getBehavior("Text").setText("DUNGEON KEEPER: WELL DONE YOUNG ARTHUR, YOU HAVE HELPED US PUSH BACK THE DARK FORCES HOWEVER THERE STILL AT LARGE. HERE TAKE THIS, A NEW ABILITY(PRESS LEFT CLICK TO FIRE AN ICE BLAST)");
}
}{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(1);
}}

}


};gdjs.dungeonCode.mapOfGDgdjs_9546dungeonCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.dungeonCode.GDplayerObjects1});
gdjs.dungeonCode.mapOfGDgdjs_9546dungeonCode_9546GDSummoning_95959595circlesObjects1Objects = Hashtable.newFrom({"Summoning_circles": gdjs.dungeonCode.GDSummoning_9595circlesObjects1});
gdjs.dungeonCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "Background", 0);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(4);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Joystick"), gdjs.dungeonCode.GDJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.dungeonCode.GDJoystickObjects1.length;i<l;++i) {
    if ( gdjs.dungeonCode.GDJoystickObjects1[i].StickForceX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) <= -(0.5) ) {
        isConditionTrue_0 = true;
        gdjs.dungeonCode.GDJoystickObjects1[k] = gdjs.dungeonCode.GDJoystickObjects1[i];
        ++k;
    }
}
gdjs.dungeonCode.GDJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.dungeonCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.dungeonCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.dungeonCode.GDplayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Joystick"), gdjs.dungeonCode.GDJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.dungeonCode.GDJoystickObjects1.length;i<l;++i) {
    if ( gdjs.dungeonCode.GDJoystickObjects1[i].StickForceX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) <= 0.5 ) {
        isConditionTrue_0 = true;
        gdjs.dungeonCode.GDJoystickObjects1[k] = gdjs.dungeonCode.GDJoystickObjects1[i];
        ++k;
    }
}
gdjs.dungeonCode.GDJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.dungeonCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.dungeonCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.dungeonCode.GDplayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.dungeonCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.dungeonCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.dungeonCode.GDplayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.dungeonCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.dungeonCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.dungeonCode.GDplayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.dungeonCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.dungeonCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.dungeonCode.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.dungeonCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.dungeonCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.dungeonCode.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateDownKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.dungeonCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.dungeonCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.dungeonCode.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.dungeonCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.dungeonCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.dungeonCode.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.dungeonCode.GDcontinue_9595buttonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.dungeonCode.GDcontinue_9595buttonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("continue_button"), gdjs.dungeonCode.GDcontinue_9595buttonObjects2);
for (var i = 0, k = 0, l = gdjs.dungeonCode.GDcontinue_9595buttonObjects2.length;i<l;++i) {
    if ( gdjs.dungeonCode.GDcontinue_9595buttonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.dungeonCode.GDcontinue_9595buttonObjects2[k] = gdjs.dungeonCode.GDcontinue_9595buttonObjects2[i];
        ++k;
    }
}
gdjs.dungeonCode.GDcontinue_9595buttonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.dungeonCode.GDcontinue_9595buttonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.dungeonCode.GDcontinue_9595buttonObjects1_1final.indexOf(gdjs.dungeonCode.GDcontinue_9595buttonObjects2[j]) === -1 )
            gdjs.dungeonCode.GDcontinue_9595buttonObjects1_1final.push(gdjs.dungeonCode.GDcontinue_9595buttonObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("continue_button"), gdjs.dungeonCode.GDcontinue_9595buttonObjects2);
for (var i = 0, k = 0, l = gdjs.dungeonCode.GDcontinue_9595buttonObjects2.length;i<l;++i) {
    if ( gdjs.dungeonCode.GDcontinue_9595buttonObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.dungeonCode.GDcontinue_9595buttonObjects2[k] = gdjs.dungeonCode.GDcontinue_9595buttonObjects2[i];
        ++k;
    }
}
gdjs.dungeonCode.GDcontinue_9595buttonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.dungeonCode.GDcontinue_9595buttonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.dungeonCode.GDcontinue_9595buttonObjects1_1final.indexOf(gdjs.dungeonCode.GDcontinue_9595buttonObjects2[j]) === -1 )
            gdjs.dungeonCode.GDcontinue_9595buttonObjects1_1final.push(gdjs.dungeonCode.GDcontinue_9595buttonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.dungeonCode.GDcontinue_9595buttonObjects1_1final, gdjs.dungeonCode.GDcontinue_9595buttonObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16685740);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(11).add(1);
}}

}


{

gdjs.dungeonCode.GDcontinue_9595buttonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.dungeonCode.GDcontinue_9595buttonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("continue_button"), gdjs.dungeonCode.GDcontinue_9595buttonObjects2);
for (var i = 0, k = 0, l = gdjs.dungeonCode.GDcontinue_9595buttonObjects2.length;i<l;++i) {
    if ( gdjs.dungeonCode.GDcontinue_9595buttonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.dungeonCode.GDcontinue_9595buttonObjects2[k] = gdjs.dungeonCode.GDcontinue_9595buttonObjects2[i];
        ++k;
    }
}
gdjs.dungeonCode.GDcontinue_9595buttonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.dungeonCode.GDcontinue_9595buttonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.dungeonCode.GDcontinue_9595buttonObjects1_1final.indexOf(gdjs.dungeonCode.GDcontinue_9595buttonObjects2[j]) === -1 )
            gdjs.dungeonCode.GDcontinue_9595buttonObjects1_1final.push(gdjs.dungeonCode.GDcontinue_9595buttonObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("continue_button"), gdjs.dungeonCode.GDcontinue_9595buttonObjects2);
for (var i = 0, k = 0, l = gdjs.dungeonCode.GDcontinue_9595buttonObjects2.length;i<l;++i) {
    if ( gdjs.dungeonCode.GDcontinue_9595buttonObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.dungeonCode.GDcontinue_9595buttonObjects2[k] = gdjs.dungeonCode.GDcontinue_9595buttonObjects2[i];
        ++k;
    }
}
gdjs.dungeonCode.GDcontinue_9595buttonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.dungeonCode.GDcontinue_9595buttonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.dungeonCode.GDcontinue_9595buttonObjects1_1final.indexOf(gdjs.dungeonCode.GDcontinue_9595buttonObjects2[j]) === -1 )
            gdjs.dungeonCode.GDcontinue_9595buttonObjects1_1final.push(gdjs.dungeonCode.GDcontinue_9595buttonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.dungeonCode.GDcontinue_9595buttonObjects1_1final, gdjs.dungeonCode.GDcontinue_9595buttonObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16687388);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16687028);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue_text1"), gdjs.dungeonCode.GDDialogue_9595text1Objects1);
{for(var i = 0, len = gdjs.dungeonCode.GDDialogue_9595text1Objects1.length ;i < len;++i) {
    gdjs.dungeonCode.GDDialogue_9595text1Objects1[i].getBehavior("Text").setText("ARTHUR:WHAT IS THIS PLACE");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16689364);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue_text1"), gdjs.dungeonCode.GDDialogue_9595text1Objects1);
{for(var i = 0, len = gdjs.dungeonCode.GDDialogue_9595text1Objects1.length ;i < len;++i) {
    gdjs.dungeonCode.GDDialogue_9595text1Objects1[i].getBehavior("Text").setText("DUNEGEON KEEPER: WHO DARES DISTURB ME ...");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16690028);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue_text1"), gdjs.dungeonCode.GDDialogue_9595text1Objects1);
{for(var i = 0, len = gdjs.dungeonCode.GDDialogue_9595text1Objects1.length ;i < len;++i) {
    gdjs.dungeonCode.GDDialogue_9595text1Objects1[i].getBehavior("Text").setText("DUNGEON KEEPER: YOU THERE, I SEE POWER IN YOU , GO FIND ALL THE ICE FRAGMENTS. IF YOU DONT THE ACADAMY WILL BE IN GREAT DANGER ... ( GO FIND 15 ICE FRAGMENTS");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16691348);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue_text1"), gdjs.dungeonCode.GDDialogue_9595text1Objects1);
gdjs.dungeonCode.GDSummoning_9595circlesObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.dungeonCode.mapOfGDgdjs_9546dungeonCode_9546GDSummoning_95959595circlesObjects1Objects, 462, 445, "");
}{for(var i = 0, len = gdjs.dungeonCode.GDSummoning_9595circlesObjects1.length ;i < len;++i) {
    gdjs.dungeonCode.GDSummoning_9595circlesObjects1[i].getBehavior("Resizable").setHeight(183);
}
}{for(var i = 0, len = gdjs.dungeonCode.GDSummoning_9595circlesObjects1.length ;i < len;++i) {
    gdjs.dungeonCode.GDSummoning_9595circlesObjects1[i].getBehavior("Resizable").setWidth(146);
}
}{for(var i = 0, len = gdjs.dungeonCode.GDDialogue_9595text1Objects1.length ;i < len;++i) {
    gdjs.dungeonCode.GDDialogue_9595text1Objects1[i].getBehavior("Text").setText("ARTHUR: OK I WONT LET YOU DOWN (RETURN TO THE MAIN ARENA)");
}
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.dungeonCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.dungeonCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.dungeonCode.GDplayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() == 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16694108);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(6);
}
{ //Subevents
gdjs.dungeonCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber() == 6);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16697724);
}
}
if (isConditionTrue_0) {
gdjs.dungeonCode.GDSummoning_9595circlesObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.dungeonCode.mapOfGDgdjs_9546dungeonCode_9546GDSummoning_95959595circlesObjects1Objects, 462, 445, "");
}{for(var i = 0, len = gdjs.dungeonCode.GDSummoning_9595circlesObjects1.length ;i < len;++i) {
    gdjs.dungeonCode.GDSummoning_9595circlesObjects1[i].getBehavior("Resizable").setHeight(183);
}
}{for(var i = 0, len = gdjs.dungeonCode.GDSummoning_9595circlesObjects1.length ;i < len;++i) {
    gdjs.dungeonCode.GDSummoning_9595circlesObjects1[i].getBehavior("Resizable").setWidth(146);
}
}
{ //Subevents
gdjs.dungeonCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Summoning_circles"), gdjs.dungeonCode.GDSummoning_9595circlesObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.dungeonCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.dungeonCode.mapOfGDgdjs_9546dungeonCode_9546GDplayerObjects1Objects, gdjs.dungeonCode.mapOfGDgdjs_9546dungeonCode_9546GDSummoning_95959595circlesObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main scene", false);
}}

}


};

gdjs.dungeonCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.dungeonCode.GDNewSpriteObjects1.length = 0;
gdjs.dungeonCode.GDNewSpriteObjects2.length = 0;
gdjs.dungeonCode.GDNewSpriteObjects3.length = 0;
gdjs.dungeonCode.GDDialogue_9595text1Objects1.length = 0;
gdjs.dungeonCode.GDDialogue_9595text1Objects2.length = 0;
gdjs.dungeonCode.GDDialogue_9595text1Objects3.length = 0;
gdjs.dungeonCode.GDcontinue_9595buttonObjects1.length = 0;
gdjs.dungeonCode.GDcontinue_9595buttonObjects2.length = 0;
gdjs.dungeonCode.GDcontinue_9595buttonObjects3.length = 0;
gdjs.dungeonCode.GDSummoning_9595circlesObjects1.length = 0;
gdjs.dungeonCode.GDSummoning_9595circlesObjects2.length = 0;
gdjs.dungeonCode.GDSummoning_9595circlesObjects3.length = 0;
gdjs.dungeonCode.GDplayerObjects1.length = 0;
gdjs.dungeonCode.GDplayerObjects2.length = 0;
gdjs.dungeonCode.GDplayerObjects3.length = 0;
gdjs.dungeonCode.GDdungeon_9595backgroundObjects1.length = 0;
gdjs.dungeonCode.GDdungeon_9595backgroundObjects2.length = 0;
gdjs.dungeonCode.GDdungeon_9595backgroundObjects3.length = 0;
gdjs.dungeonCode.GDPlatformObjects1.length = 0;
gdjs.dungeonCode.GDPlatformObjects2.length = 0;
gdjs.dungeonCode.GDPlatformObjects3.length = 0;
gdjs.dungeonCode.GDborderObjects1.length = 0;
gdjs.dungeonCode.GDborderObjects2.length = 0;
gdjs.dungeonCode.GDborderObjects3.length = 0;
gdjs.dungeonCode.GDJumpButtonObjects1.length = 0;
gdjs.dungeonCode.GDJumpButtonObjects2.length = 0;
gdjs.dungeonCode.GDJumpButtonObjects3.length = 0;
gdjs.dungeonCode.GDJoystickObjects1.length = 0;
gdjs.dungeonCode.GDJoystickObjects2.length = 0;
gdjs.dungeonCode.GDJoystickObjects3.length = 0;
gdjs.dungeonCode.GDfireball_9595joystick_9595Objects1.length = 0;
gdjs.dungeonCode.GDfireball_9595joystick_9595Objects2.length = 0;
gdjs.dungeonCode.GDfireball_9595joystick_9595Objects3.length = 0;
gdjs.dungeonCode.GDiceblast_9595joystickObjects1.length = 0;
gdjs.dungeonCode.GDiceblast_9595joystickObjects2.length = 0;
gdjs.dungeonCode.GDiceblast_9595joystickObjects3.length = 0;

gdjs.dungeonCode.eventsList2(runtimeScene);
gdjs.dungeonCode.GDNewSpriteObjects1.length = 0;
gdjs.dungeonCode.GDNewSpriteObjects2.length = 0;
gdjs.dungeonCode.GDNewSpriteObjects3.length = 0;
gdjs.dungeonCode.GDDialogue_9595text1Objects1.length = 0;
gdjs.dungeonCode.GDDialogue_9595text1Objects2.length = 0;
gdjs.dungeonCode.GDDialogue_9595text1Objects3.length = 0;
gdjs.dungeonCode.GDcontinue_9595buttonObjects1.length = 0;
gdjs.dungeonCode.GDcontinue_9595buttonObjects2.length = 0;
gdjs.dungeonCode.GDcontinue_9595buttonObjects3.length = 0;
gdjs.dungeonCode.GDSummoning_9595circlesObjects1.length = 0;
gdjs.dungeonCode.GDSummoning_9595circlesObjects2.length = 0;
gdjs.dungeonCode.GDSummoning_9595circlesObjects3.length = 0;
gdjs.dungeonCode.GDplayerObjects1.length = 0;
gdjs.dungeonCode.GDplayerObjects2.length = 0;
gdjs.dungeonCode.GDplayerObjects3.length = 0;
gdjs.dungeonCode.GDdungeon_9595backgroundObjects1.length = 0;
gdjs.dungeonCode.GDdungeon_9595backgroundObjects2.length = 0;
gdjs.dungeonCode.GDdungeon_9595backgroundObjects3.length = 0;
gdjs.dungeonCode.GDPlatformObjects1.length = 0;
gdjs.dungeonCode.GDPlatformObjects2.length = 0;
gdjs.dungeonCode.GDPlatformObjects3.length = 0;
gdjs.dungeonCode.GDborderObjects1.length = 0;
gdjs.dungeonCode.GDborderObjects2.length = 0;
gdjs.dungeonCode.GDborderObjects3.length = 0;
gdjs.dungeonCode.GDJumpButtonObjects1.length = 0;
gdjs.dungeonCode.GDJumpButtonObjects2.length = 0;
gdjs.dungeonCode.GDJumpButtonObjects3.length = 0;
gdjs.dungeonCode.GDJoystickObjects1.length = 0;
gdjs.dungeonCode.GDJoystickObjects2.length = 0;
gdjs.dungeonCode.GDJoystickObjects3.length = 0;
gdjs.dungeonCode.GDfireball_9595joystick_9595Objects1.length = 0;
gdjs.dungeonCode.GDfireball_9595joystick_9595Objects2.length = 0;
gdjs.dungeonCode.GDfireball_9595joystick_9595Objects3.length = 0;
gdjs.dungeonCode.GDiceblast_9595joystickObjects1.length = 0;
gdjs.dungeonCode.GDiceblast_9595joystickObjects2.length = 0;
gdjs.dungeonCode.GDiceblast_9595joystickObjects3.length = 0;


return;

}

gdjs['dungeonCode'] = gdjs.dungeonCode;
