gdjs.Top_32AreaCode = {};
gdjs.Top_32AreaCode.localVariables = [];
gdjs.Top_32AreaCode.GDDoorLockObjects2_1final = [];

gdjs.Top_32AreaCode.GDOwenObjects2_1final = [];

gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2_1final = [];

gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects1= [];
gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2= [];
gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects3= [];
gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects4= [];
gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects5= [];
gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects6= [];
gdjs.Top_32AreaCode.GDWallObjects1= [];
gdjs.Top_32AreaCode.GDWallObjects2= [];
gdjs.Top_32AreaCode.GDWallObjects3= [];
gdjs.Top_32AreaCode.GDWallObjects4= [];
gdjs.Top_32AreaCode.GDWallObjects5= [];
gdjs.Top_32AreaCode.GDWallObjects6= [];
gdjs.Top_32AreaCode.GDPlantObjects1= [];
gdjs.Top_32AreaCode.GDPlantObjects2= [];
gdjs.Top_32AreaCode.GDPlantObjects3= [];
gdjs.Top_32AreaCode.GDPlantObjects4= [];
gdjs.Top_32AreaCode.GDPlantObjects5= [];
gdjs.Top_32AreaCode.GDPlantObjects6= [];
gdjs.Top_32AreaCode.GDJoystickObjects1= [];
gdjs.Top_32AreaCode.GDJoystickObjects2= [];
gdjs.Top_32AreaCode.GDJoystickObjects3= [];
gdjs.Top_32AreaCode.GDJoystickObjects4= [];
gdjs.Top_32AreaCode.GDJoystickObjects5= [];
gdjs.Top_32AreaCode.GDJoystickObjects6= [];
gdjs.Top_32AreaCode.GDNewTileMapObjects1= [];
gdjs.Top_32AreaCode.GDNewTileMapObjects2= [];
gdjs.Top_32AreaCode.GDNewTileMapObjects3= [];
gdjs.Top_32AreaCode.GDNewTileMapObjects4= [];
gdjs.Top_32AreaCode.GDNewTileMapObjects5= [];
gdjs.Top_32AreaCode.GDNewTileMapObjects6= [];
gdjs.Top_32AreaCode.GDSceneLoaderObjects1= [];
gdjs.Top_32AreaCode.GDSceneLoaderObjects2= [];
gdjs.Top_32AreaCode.GDSceneLoaderObjects3= [];
gdjs.Top_32AreaCode.GDSceneLoaderObjects4= [];
gdjs.Top_32AreaCode.GDSceneLoaderObjects5= [];
gdjs.Top_32AreaCode.GDSceneLoaderObjects6= [];
gdjs.Top_32AreaCode.GDDialogueObjects1= [];
gdjs.Top_32AreaCode.GDDialogueObjects2= [];
gdjs.Top_32AreaCode.GDDialogueObjects3= [];
gdjs.Top_32AreaCode.GDDialogueObjects4= [];
gdjs.Top_32AreaCode.GDDialogueObjects5= [];
gdjs.Top_32AreaCode.GDDialogueObjects6= [];
gdjs.Top_32AreaCode.GDOptionsObjects1= [];
gdjs.Top_32AreaCode.GDOptionsObjects2= [];
gdjs.Top_32AreaCode.GDOptionsObjects3= [];
gdjs.Top_32AreaCode.GDOptionsObjects4= [];
gdjs.Top_32AreaCode.GDOptionsObjects5= [];
gdjs.Top_32AreaCode.GDOptionsObjects6= [];
gdjs.Top_32AreaCode.GDDialogueBackgroundObjects1= [];
gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2= [];
gdjs.Top_32AreaCode.GDDialogueBackgroundObjects3= [];
gdjs.Top_32AreaCode.GDDialogueBackgroundObjects4= [];
gdjs.Top_32AreaCode.GDDialogueBackgroundObjects5= [];
gdjs.Top_32AreaCode.GDDialogueBackgroundObjects6= [];
gdjs.Top_32AreaCode.GDOwenObjects1= [];
gdjs.Top_32AreaCode.GDOwenObjects2= [];
gdjs.Top_32AreaCode.GDOwenObjects3= [];
gdjs.Top_32AreaCode.GDOwenObjects4= [];
gdjs.Top_32AreaCode.GDOwenObjects5= [];
gdjs.Top_32AreaCode.GDOwenObjects6= [];
gdjs.Top_32AreaCode.GDMonocleObjects1= [];
gdjs.Top_32AreaCode.GDMonocleObjects2= [];
gdjs.Top_32AreaCode.GDMonocleObjects3= [];
gdjs.Top_32AreaCode.GDMonocleObjects4= [];
gdjs.Top_32AreaCode.GDMonocleObjects5= [];
gdjs.Top_32AreaCode.GDMonocleObjects6= [];
gdjs.Top_32AreaCode.GDDoorLockObjects1= [];
gdjs.Top_32AreaCode.GDDoorLockObjects2= [];
gdjs.Top_32AreaCode.GDDoorLockObjects3= [];
gdjs.Top_32AreaCode.GDDoorLockObjects4= [];
gdjs.Top_32AreaCode.GDDoorLockObjects5= [];
gdjs.Top_32AreaCode.GDDoorLockObjects6= [];


gdjs.Top_32AreaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() == "Bottom");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TopDown_Character"), gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2);
{for(var i = 0, len = gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2[i].setPosition(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("X Coordinate").getAsNumber(),runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Y Coordinate").getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Top");
}}

}


};gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDNewTileMapObjects1Objects = Hashtable.newFrom({"NewTileMap": gdjs.Top_32AreaCode.GDNewTileMapObjects1});
gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDOwenObjects1Objects = Hashtable.newFrom({"Owen": gdjs.Top_32AreaCode.GDOwenObjects1});
gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDTopDown_95959595CharacterObjects1Objects = Hashtable.newFrom({"TopDown_Character": gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects1});
gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDDoorLockObjects1Objects = Hashtable.newFrom({"DoorLock": gdjs.Top_32AreaCode.GDDoorLockObjects1});
gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDTopDown_95959595CharacterObjects1Objects = Hashtable.newFrom({"TopDown_Character": gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects1});
gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDSceneLoaderObjects1Objects = Hashtable.newFrom({"SceneLoader": gdjs.Top_32AreaCode.GDSceneLoaderObjects1});
gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDTopDown_95959595CharacterObjects3Objects = Hashtable.newFrom({"TopDown_Character": gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects3});
gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDOwenObjects3Objects = Hashtable.newFrom({"Owen": gdjs.Top_32AreaCode.GDOwenObjects3});
gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDTopDown_95959595CharacterObjects3Objects = Hashtable.newFrom({"TopDown_Character": gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects3});
gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDDoorLockObjects3Objects = Hashtable.newFrom({"DoorLock": gdjs.Top_32AreaCode.GDDoorLockObjects3});
gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDTopDown_95959595CharacterObjects3Objects = Hashtable.newFrom({"TopDown_Character": gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects3});
gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDOwenObjects3Objects = Hashtable.newFrom({"Owen": gdjs.Top_32AreaCode.GDOwenObjects3});
gdjs.Top_32AreaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("MayorQuest").getChild("Status").getAsString() == "Accepted");
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.startFrom("Gratitude");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("MayorQuest").getChild("Status").getAsString() == "Declined");
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.startFrom("ReQuest");
}}

}


};gdjs.Top_32AreaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(5).getChild("IntroSeen").getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.startFrom("Owen Start");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(5).getChild("MayorQuest").getChild("Seen").getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(5).getChild("IntroSeen").getAsBoolean();
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.startFrom("Q Start");
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("MayorQuest").getChild("Seen").setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(5).getChild("MayorQuest").getChild("Seen").getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Top_32AreaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(7).getChild("StorageKey").getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Monocle").getAsBoolean();
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.startFrom("PostStorageKey_Owen");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Monocle").getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.startFrom("PostMonocle_Owen");
}}

}


};gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDTopDown_95959595CharacterObjects2Objects = Hashtable.newFrom({"TopDown_Character": gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2});
gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDDoorLockObjects2Objects = Hashtable.newFrom({"DoorLock": gdjs.Top_32AreaCode.GDDoorLockObjects2});
gdjs.Top_32AreaCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Top_32AreaCode.GDOwenObjects2, gdjs.Top_32AreaCode.GDOwenObjects3);

gdjs.copyArray(gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2, gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDTopDown_95959595CharacterObjects3Objects, gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDOwenObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Top_32AreaCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Top_32AreaCode.GDDoorLockObjects2 */
/* Reuse gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDTopDown_95959595CharacterObjects2Objects, gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDDoorLockObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.dialogueTree.startFrom("DoorLock_Storage");
}}

}


};gdjs.Top_32AreaCode.eventsList4 = function(runtimeScene) {

{


gdjs.Top_32AreaCode.eventsList3(runtimeScene);
}


};gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDTopDown_95959595CharacterObjects2Objects = Hashtable.newFrom({"TopDown_Character": gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2});
gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDOwenObjects2Objects = Hashtable.newFrom({"Owen": gdjs.Top_32AreaCode.GDOwenObjects2});
gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDTopDown_95959595CharacterObjects2Objects = Hashtable.newFrom({"TopDown_Character": gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2});
gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDDoorLockObjects2Objects = Hashtable.newFrom({"DoorLock": gdjs.Top_32AreaCode.GDDoorLockObjects2});
gdjs.Top_32AreaCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13615316);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scrollText") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0));
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrollText");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0.01);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0.05);
}}

}


};gdjs.Top_32AreaCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13623028);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isScrollingUp(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13624964);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isScrollingDown(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13626404);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(3).getAsBoolean();
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.confirmSelectOption();
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(false);
}}

}


};gdjs.Top_32AreaCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.compareVariable("QuestStatus", "Accepted");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("MayorQuest").getChild("Status").setString("Accepted");
}{runtimeScene.getGame().getVariables().getFromIndex(7).getChild("MayorKey").setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.compareVariable("QuestStatus", "Declined");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("MayorQuest").getChild("Status").setString("Declined");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("Intro");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("IntroSeen").setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("UnlockStorage");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DoorLock"), gdjs.Top_32AreaCode.GDDoorLockObjects2);
{for(var i = 0, len = gdjs.Top_32AreaCode.GDDoorLockObjects2.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDDoorLockObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("OwenMonocleSprite");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Owen"), gdjs.Top_32AreaCode.GDOwenObjects2);
{for(var i = 0, len = gdjs.Top_32AreaCode.GDOwenObjects2.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDOwenObjects2[i].getBehavior("Animation").setAnimationName("MonocleMayor");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("OwenMonocleEnding");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TopDown_Character"), gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects1);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "OwenEnding", false);
}{for(var i = 0, len = gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects1[i].setAngle(90);
}
}}

}


};gdjs.Top_32AreaCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Top_32AreaCode.GDDialogueObjects2);
gdjs.copyArray(runtimeScene.getObjects("DialogueBackground"), gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Top_32AreaCode.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2[i].getBehavior("Resizable").setWidth(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "UI", 0));
}
}{for(var i = 0, len = gdjs.Top_32AreaCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDDialogueObjects2[i].setWrappingWidth((( gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2.length === 0 ) ? 0 :gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2[0].getWidth()) * 0.9);
}
}{for(var i = 0, len = gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2[i].getWidth()),gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2[i].getHeight()));
}
}{for(var i = 0, len = gdjs.Top_32AreaCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDDialogueObjects2[i].setPosition((( gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2.length === 0 ) ? 0 :gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2[0].getPointX("")) + 0.03 * (( gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2.length === 0 ) ? 0 :gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2[0].getWidth()),(( gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2.length === 0 ) ? 0 :gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2[0].getPointY("")) + 10);
}
}{for(var i = 0, len = gdjs.Top_32AreaCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDOptionsObjects2[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "UI", 0) / 2,gdjs.evtTools.camera.getCameraHeight(runtimeScene, "UI", 0) - 50);
}
}}

}


{

gdjs.Top_32AreaCode.GDDoorLockObjects2.length = 0;

gdjs.Top_32AreaCode.GDOwenObjects2.length = 0;

gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Top_32AreaCode.GDDoorLockObjects2_1final.length = 0;
gdjs.Top_32AreaCode.GDOwenObjects2_1final.length = 0;
gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Owen"), gdjs.Top_32AreaCode.GDOwenObjects3);
gdjs.copyArray(runtimeScene.getObjects("TopDown_Character"), gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects3);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDTopDown_95959595CharacterObjects3Objects, gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDOwenObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Top_32AreaCode.GDOwenObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Top_32AreaCode.GDOwenObjects2_1final.indexOf(gdjs.Top_32AreaCode.GDOwenObjects3[j]) === -1 )
            gdjs.Top_32AreaCode.GDOwenObjects2_1final.push(gdjs.Top_32AreaCode.GDOwenObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2_1final.indexOf(gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects3[j]) === -1 )
            gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2_1final.push(gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("DoorLock"), gdjs.Top_32AreaCode.GDDoorLockObjects3);
gdjs.copyArray(runtimeScene.getObjects("TopDown_Character"), gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects3);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDTopDown_95959595CharacterObjects3Objects, gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDDoorLockObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Top_32AreaCode.GDDoorLockObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Top_32AreaCode.GDDoorLockObjects2_1final.indexOf(gdjs.Top_32AreaCode.GDDoorLockObjects3[j]) === -1 )
            gdjs.Top_32AreaCode.GDDoorLockObjects2_1final.push(gdjs.Top_32AreaCode.GDDoorLockObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2_1final.indexOf(gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects3[j]) === -1 )
            gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2_1final.push(gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Top_32AreaCode.GDDoorLockObjects2_1final, gdjs.Top_32AreaCode.GDDoorLockObjects2);
gdjs.copyArray(gdjs.Top_32AreaCode.GDOwenObjects2_1final, gdjs.Top_32AreaCode.GDOwenObjects2);
gdjs.copyArray(gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2_1final, gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2.length;i<l;++i) {
    if ( gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2[i].getBehavior("NavMeshPathfindingBehavior").Speed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2[k] = gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2[i];
        ++k;
    }
}
gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13598572);
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Top_32AreaCode.GDDialogueObjects2);
gdjs.copyArray(runtimeScene.getObjects("DialogueBackground"), gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Top_32AreaCode.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Top_32AreaCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDDialogueObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Top_32AreaCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDOptionsObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrollText");
}{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(false);
}
{ //Subevents
gdjs.Top_32AreaCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DoorLock"), gdjs.Top_32AreaCode.GDDoorLockObjects2);
gdjs.copyArray(runtimeScene.getObjects("Owen"), gdjs.Top_32AreaCode.GDOwenObjects2);
gdjs.copyArray(runtimeScene.getObjects("TopDown_Character"), gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDTopDown_95959595CharacterObjects2Objects, gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDOwenObjects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDTopDown_95959595CharacterObjects2Objects, gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDDoorLockObjects2Objects, true, runtimeScene, false);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scrollText") >= 3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Top_32AreaCode.GDDialogueObjects2);
gdjs.copyArray(runtimeScene.getObjects("DialogueBackground"), gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Top_32AreaCode.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Top_32AreaCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDDialogueObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Top_32AreaCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDOptionsObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2[i].hide();
}
}{gdjs.dialogueTree.saveState(runtimeScene.getGame().getVariables().getFromIndex(6));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Top_32AreaCode.GDDialogueObjects2);
{for(var i = 0, len = gdjs.Top_32AreaCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDDialogueObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.Top_32AreaCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Top_32AreaCode.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Top_32AreaCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDOptionsObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Top_32AreaCode.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Top_32AreaCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDOptionsObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.Top_32AreaCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasSelectedOptionChanged();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Top_32AreaCode.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Top_32AreaCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDOptionsObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
}
}}

}


{


gdjs.Top_32AreaCode.eventsList7(runtimeScene);
}


};gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDTopDown_95959595CharacterObjects2Objects = Hashtable.newFrom({"TopDown_Character": gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2});
gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDMonocleObjects2Objects = Hashtable.newFrom({"Monocle": gdjs.Top_32AreaCode.GDMonocleObjects2});
gdjs.Top_32AreaCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Monocle"), gdjs.Top_32AreaCode.GDMonocleObjects2);
gdjs.copyArray(runtimeScene.getObjects("TopDown_Character"), gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDTopDown_95959595CharacterObjects2Objects, gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDMonocleObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Top_32AreaCode.GDMonocleObjects2 */
{for(var i = 0, len = gdjs.Top_32AreaCode.GDMonocleObjects2.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDMonocleObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Monocle").setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(7).getChild("StorageKey").getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.setVariable("hasStorageKey", true);
}}

}


};gdjs.Top_32AreaCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Top_32AreaCode.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogueBackground"), gdjs.Top_32AreaCode.GDDialogueBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Top_32AreaCode.GDOptionsObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 1920, 1080);
}{gdjs.evtTools.window.centerWindow(runtimeScene);
}{for(var i = 0, len = gdjs.Top_32AreaCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDDialogueObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.Top_32AreaCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDDialogueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Top_32AreaCode.GDOptionsObjects1.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDOptionsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Top_32AreaCode.GDDialogueBackgroundObjects1.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDDialogueBackgroundObjects1[i].hide();
}
}{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "Dialogue");
}{gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.func(runtimeScene, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.dialogueTree.loadState(runtimeScene.getGame().getVariables().getFromIndex(6));
}
{ //Subevents
gdjs.Top_32AreaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewTileMap"), gdjs.Top_32AreaCode.GDNewTileMapObjects1);
gdjs.copyArray(runtimeScene.getObjects("Owen"), gdjs.Top_32AreaCode.GDOwenObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopDown_Character"), gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects1);
{for(var i = 0, len = gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects1[i].separateFromObjectsList(gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDNewTileMapObjects1Objects, false);
}
}{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1280, 1280, "", 0);
}{for(var i = 0, len = gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects1[i].separateFromObjectsList(gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDOwenObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DoorLock"), gdjs.Top_32AreaCode.GDDoorLockObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopDown_Character"), gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDTopDown_95959595CharacterObjects1Objects, gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDDoorLockObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects1[i].getBehavior("NavMeshPathfindingBehavior").SetDestination((gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects1[i].getPointX("")), (gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects1[i].getPointY("")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DialogueBackground"), gdjs.Top_32AreaCode.GDDialogueBackgroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Top_32AreaCode.GDDialogueBackgroundObjects1.length;i<l;++i) {
    if ( !(gdjs.Top_32AreaCode.GDDialogueBackgroundObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Top_32AreaCode.GDDialogueBackgroundObjects1[k] = gdjs.Top_32AreaCode.GDDialogueBackgroundObjects1[i];
        ++k;
    }
}
gdjs.Top_32AreaCode.GDDialogueBackgroundObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TopDown_Character"), gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects1);
{for(var i = 0, len = gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects1[i].getBehavior("NavMeshPathfindingBehavior").SetDestination(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SceneLoader"), gdjs.Top_32AreaCode.GDSceneLoaderObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopDown_Character"), gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDTopDown_95959595CharacterObjects1Objects, gdjs.Top_32AreaCode.mapOfGDgdjs_9546Top_959532AreaCode_9546GDSceneLoaderObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Bottom Area", false);
}}

}


{


gdjs.Top_32AreaCode.eventsList8(runtimeScene);
}


{


gdjs.Top_32AreaCode.eventsList9(runtimeScene);
}


};

gdjs.Top_32AreaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects1.length = 0;
gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2.length = 0;
gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects3.length = 0;
gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects4.length = 0;
gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects5.length = 0;
gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects6.length = 0;
gdjs.Top_32AreaCode.GDWallObjects1.length = 0;
gdjs.Top_32AreaCode.GDWallObjects2.length = 0;
gdjs.Top_32AreaCode.GDWallObjects3.length = 0;
gdjs.Top_32AreaCode.GDWallObjects4.length = 0;
gdjs.Top_32AreaCode.GDWallObjects5.length = 0;
gdjs.Top_32AreaCode.GDWallObjects6.length = 0;
gdjs.Top_32AreaCode.GDPlantObjects1.length = 0;
gdjs.Top_32AreaCode.GDPlantObjects2.length = 0;
gdjs.Top_32AreaCode.GDPlantObjects3.length = 0;
gdjs.Top_32AreaCode.GDPlantObjects4.length = 0;
gdjs.Top_32AreaCode.GDPlantObjects5.length = 0;
gdjs.Top_32AreaCode.GDPlantObjects6.length = 0;
gdjs.Top_32AreaCode.GDJoystickObjects1.length = 0;
gdjs.Top_32AreaCode.GDJoystickObjects2.length = 0;
gdjs.Top_32AreaCode.GDJoystickObjects3.length = 0;
gdjs.Top_32AreaCode.GDJoystickObjects4.length = 0;
gdjs.Top_32AreaCode.GDJoystickObjects5.length = 0;
gdjs.Top_32AreaCode.GDJoystickObjects6.length = 0;
gdjs.Top_32AreaCode.GDNewTileMapObjects1.length = 0;
gdjs.Top_32AreaCode.GDNewTileMapObjects2.length = 0;
gdjs.Top_32AreaCode.GDNewTileMapObjects3.length = 0;
gdjs.Top_32AreaCode.GDNewTileMapObjects4.length = 0;
gdjs.Top_32AreaCode.GDNewTileMapObjects5.length = 0;
gdjs.Top_32AreaCode.GDNewTileMapObjects6.length = 0;
gdjs.Top_32AreaCode.GDSceneLoaderObjects1.length = 0;
gdjs.Top_32AreaCode.GDSceneLoaderObjects2.length = 0;
gdjs.Top_32AreaCode.GDSceneLoaderObjects3.length = 0;
gdjs.Top_32AreaCode.GDSceneLoaderObjects4.length = 0;
gdjs.Top_32AreaCode.GDSceneLoaderObjects5.length = 0;
gdjs.Top_32AreaCode.GDSceneLoaderObjects6.length = 0;
gdjs.Top_32AreaCode.GDDialogueObjects1.length = 0;
gdjs.Top_32AreaCode.GDDialogueObjects2.length = 0;
gdjs.Top_32AreaCode.GDDialogueObjects3.length = 0;
gdjs.Top_32AreaCode.GDDialogueObjects4.length = 0;
gdjs.Top_32AreaCode.GDDialogueObjects5.length = 0;
gdjs.Top_32AreaCode.GDDialogueObjects6.length = 0;
gdjs.Top_32AreaCode.GDOptionsObjects1.length = 0;
gdjs.Top_32AreaCode.GDOptionsObjects2.length = 0;
gdjs.Top_32AreaCode.GDOptionsObjects3.length = 0;
gdjs.Top_32AreaCode.GDOptionsObjects4.length = 0;
gdjs.Top_32AreaCode.GDOptionsObjects5.length = 0;
gdjs.Top_32AreaCode.GDOptionsObjects6.length = 0;
gdjs.Top_32AreaCode.GDDialogueBackgroundObjects1.length = 0;
gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2.length = 0;
gdjs.Top_32AreaCode.GDDialogueBackgroundObjects3.length = 0;
gdjs.Top_32AreaCode.GDDialogueBackgroundObjects4.length = 0;
gdjs.Top_32AreaCode.GDDialogueBackgroundObjects5.length = 0;
gdjs.Top_32AreaCode.GDDialogueBackgroundObjects6.length = 0;
gdjs.Top_32AreaCode.GDOwenObjects1.length = 0;
gdjs.Top_32AreaCode.GDOwenObjects2.length = 0;
gdjs.Top_32AreaCode.GDOwenObjects3.length = 0;
gdjs.Top_32AreaCode.GDOwenObjects4.length = 0;
gdjs.Top_32AreaCode.GDOwenObjects5.length = 0;
gdjs.Top_32AreaCode.GDOwenObjects6.length = 0;
gdjs.Top_32AreaCode.GDMonocleObjects1.length = 0;
gdjs.Top_32AreaCode.GDMonocleObjects2.length = 0;
gdjs.Top_32AreaCode.GDMonocleObjects3.length = 0;
gdjs.Top_32AreaCode.GDMonocleObjects4.length = 0;
gdjs.Top_32AreaCode.GDMonocleObjects5.length = 0;
gdjs.Top_32AreaCode.GDMonocleObjects6.length = 0;
gdjs.Top_32AreaCode.GDDoorLockObjects1.length = 0;
gdjs.Top_32AreaCode.GDDoorLockObjects2.length = 0;
gdjs.Top_32AreaCode.GDDoorLockObjects3.length = 0;
gdjs.Top_32AreaCode.GDDoorLockObjects4.length = 0;
gdjs.Top_32AreaCode.GDDoorLockObjects5.length = 0;
gdjs.Top_32AreaCode.GDDoorLockObjects6.length = 0;

gdjs.Top_32AreaCode.eventsList10(runtimeScene);
gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects1.length = 0;
gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects2.length = 0;
gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects3.length = 0;
gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects4.length = 0;
gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects5.length = 0;
gdjs.Top_32AreaCode.GDTopDown_9595CharacterObjects6.length = 0;
gdjs.Top_32AreaCode.GDWallObjects1.length = 0;
gdjs.Top_32AreaCode.GDWallObjects2.length = 0;
gdjs.Top_32AreaCode.GDWallObjects3.length = 0;
gdjs.Top_32AreaCode.GDWallObjects4.length = 0;
gdjs.Top_32AreaCode.GDWallObjects5.length = 0;
gdjs.Top_32AreaCode.GDWallObjects6.length = 0;
gdjs.Top_32AreaCode.GDPlantObjects1.length = 0;
gdjs.Top_32AreaCode.GDPlantObjects2.length = 0;
gdjs.Top_32AreaCode.GDPlantObjects3.length = 0;
gdjs.Top_32AreaCode.GDPlantObjects4.length = 0;
gdjs.Top_32AreaCode.GDPlantObjects5.length = 0;
gdjs.Top_32AreaCode.GDPlantObjects6.length = 0;
gdjs.Top_32AreaCode.GDJoystickObjects1.length = 0;
gdjs.Top_32AreaCode.GDJoystickObjects2.length = 0;
gdjs.Top_32AreaCode.GDJoystickObjects3.length = 0;
gdjs.Top_32AreaCode.GDJoystickObjects4.length = 0;
gdjs.Top_32AreaCode.GDJoystickObjects5.length = 0;
gdjs.Top_32AreaCode.GDJoystickObjects6.length = 0;
gdjs.Top_32AreaCode.GDNewTileMapObjects1.length = 0;
gdjs.Top_32AreaCode.GDNewTileMapObjects2.length = 0;
gdjs.Top_32AreaCode.GDNewTileMapObjects3.length = 0;
gdjs.Top_32AreaCode.GDNewTileMapObjects4.length = 0;
gdjs.Top_32AreaCode.GDNewTileMapObjects5.length = 0;
gdjs.Top_32AreaCode.GDNewTileMapObjects6.length = 0;
gdjs.Top_32AreaCode.GDSceneLoaderObjects1.length = 0;
gdjs.Top_32AreaCode.GDSceneLoaderObjects2.length = 0;
gdjs.Top_32AreaCode.GDSceneLoaderObjects3.length = 0;
gdjs.Top_32AreaCode.GDSceneLoaderObjects4.length = 0;
gdjs.Top_32AreaCode.GDSceneLoaderObjects5.length = 0;
gdjs.Top_32AreaCode.GDSceneLoaderObjects6.length = 0;
gdjs.Top_32AreaCode.GDDialogueObjects1.length = 0;
gdjs.Top_32AreaCode.GDDialogueObjects2.length = 0;
gdjs.Top_32AreaCode.GDDialogueObjects3.length = 0;
gdjs.Top_32AreaCode.GDDialogueObjects4.length = 0;
gdjs.Top_32AreaCode.GDDialogueObjects5.length = 0;
gdjs.Top_32AreaCode.GDDialogueObjects6.length = 0;
gdjs.Top_32AreaCode.GDOptionsObjects1.length = 0;
gdjs.Top_32AreaCode.GDOptionsObjects2.length = 0;
gdjs.Top_32AreaCode.GDOptionsObjects3.length = 0;
gdjs.Top_32AreaCode.GDOptionsObjects4.length = 0;
gdjs.Top_32AreaCode.GDOptionsObjects5.length = 0;
gdjs.Top_32AreaCode.GDOptionsObjects6.length = 0;
gdjs.Top_32AreaCode.GDDialogueBackgroundObjects1.length = 0;
gdjs.Top_32AreaCode.GDDialogueBackgroundObjects2.length = 0;
gdjs.Top_32AreaCode.GDDialogueBackgroundObjects3.length = 0;
gdjs.Top_32AreaCode.GDDialogueBackgroundObjects4.length = 0;
gdjs.Top_32AreaCode.GDDialogueBackgroundObjects5.length = 0;
gdjs.Top_32AreaCode.GDDialogueBackgroundObjects6.length = 0;
gdjs.Top_32AreaCode.GDOwenObjects1.length = 0;
gdjs.Top_32AreaCode.GDOwenObjects2.length = 0;
gdjs.Top_32AreaCode.GDOwenObjects3.length = 0;
gdjs.Top_32AreaCode.GDOwenObjects4.length = 0;
gdjs.Top_32AreaCode.GDOwenObjects5.length = 0;
gdjs.Top_32AreaCode.GDOwenObjects6.length = 0;
gdjs.Top_32AreaCode.GDMonocleObjects1.length = 0;
gdjs.Top_32AreaCode.GDMonocleObjects2.length = 0;
gdjs.Top_32AreaCode.GDMonocleObjects3.length = 0;
gdjs.Top_32AreaCode.GDMonocleObjects4.length = 0;
gdjs.Top_32AreaCode.GDMonocleObjects5.length = 0;
gdjs.Top_32AreaCode.GDMonocleObjects6.length = 0;
gdjs.Top_32AreaCode.GDDoorLockObjects1.length = 0;
gdjs.Top_32AreaCode.GDDoorLockObjects2.length = 0;
gdjs.Top_32AreaCode.GDDoorLockObjects3.length = 0;
gdjs.Top_32AreaCode.GDDoorLockObjects4.length = 0;
gdjs.Top_32AreaCode.GDDoorLockObjects5.length = 0;
gdjs.Top_32AreaCode.GDDoorLockObjects6.length = 0;


return;

}

gdjs['Top_32AreaCode'] = gdjs.Top_32AreaCode;
