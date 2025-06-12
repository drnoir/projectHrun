gdjs.Bottom_32AreaCode = {};
gdjs.Bottom_32AreaCode.localVariables = [];
gdjs.Bottom_32AreaCode.GDDoorLockObjects2_1final = [];

gdjs.Bottom_32AreaCode.GDTieGuyObjects2_1final = [];

gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2_1final = [];

gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects1= [];
gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2= [];
gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects3= [];
gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects4= [];
gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects5= [];
gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects6= [];
gdjs.Bottom_32AreaCode.GDPlantObjects1= [];
gdjs.Bottom_32AreaCode.GDPlantObjects2= [];
gdjs.Bottom_32AreaCode.GDPlantObjects3= [];
gdjs.Bottom_32AreaCode.GDPlantObjects4= [];
gdjs.Bottom_32AreaCode.GDPlantObjects5= [];
gdjs.Bottom_32AreaCode.GDPlantObjects6= [];
gdjs.Bottom_32AreaCode.GDJoystickObjects1= [];
gdjs.Bottom_32AreaCode.GDJoystickObjects2= [];
gdjs.Bottom_32AreaCode.GDJoystickObjects3= [];
gdjs.Bottom_32AreaCode.GDJoystickObjects4= [];
gdjs.Bottom_32AreaCode.GDJoystickObjects5= [];
gdjs.Bottom_32AreaCode.GDJoystickObjects6= [];
gdjs.Bottom_32AreaCode.GDNewTileMapObjects1= [];
gdjs.Bottom_32AreaCode.GDNewTileMapObjects2= [];
gdjs.Bottom_32AreaCode.GDNewTileMapObjects3= [];
gdjs.Bottom_32AreaCode.GDNewTileMapObjects4= [];
gdjs.Bottom_32AreaCode.GDNewTileMapObjects5= [];
gdjs.Bottom_32AreaCode.GDNewTileMapObjects6= [];
gdjs.Bottom_32AreaCode.GDSceneLoaderObjects1= [];
gdjs.Bottom_32AreaCode.GDSceneLoaderObjects2= [];
gdjs.Bottom_32AreaCode.GDSceneLoaderObjects3= [];
gdjs.Bottom_32AreaCode.GDSceneLoaderObjects4= [];
gdjs.Bottom_32AreaCode.GDSceneLoaderObjects5= [];
gdjs.Bottom_32AreaCode.GDSceneLoaderObjects6= [];
gdjs.Bottom_32AreaCode.GDDialogueObjects1= [];
gdjs.Bottom_32AreaCode.GDDialogueObjects2= [];
gdjs.Bottom_32AreaCode.GDDialogueObjects3= [];
gdjs.Bottom_32AreaCode.GDDialogueObjects4= [];
gdjs.Bottom_32AreaCode.GDDialogueObjects5= [];
gdjs.Bottom_32AreaCode.GDDialogueObjects6= [];
gdjs.Bottom_32AreaCode.GDOptionsObjects1= [];
gdjs.Bottom_32AreaCode.GDOptionsObjects2= [];
gdjs.Bottom_32AreaCode.GDOptionsObjects3= [];
gdjs.Bottom_32AreaCode.GDOptionsObjects4= [];
gdjs.Bottom_32AreaCode.GDOptionsObjects5= [];
gdjs.Bottom_32AreaCode.GDOptionsObjects6= [];
gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects1= [];
gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2= [];
gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects3= [];
gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects4= [];
gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects5= [];
gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects6= [];
gdjs.Bottom_32AreaCode.GDTieGuyObjects1= [];
gdjs.Bottom_32AreaCode.GDTieGuyObjects2= [];
gdjs.Bottom_32AreaCode.GDTieGuyObjects3= [];
gdjs.Bottom_32AreaCode.GDTieGuyObjects4= [];
gdjs.Bottom_32AreaCode.GDTieGuyObjects5= [];
gdjs.Bottom_32AreaCode.GDTieGuyObjects6= [];
gdjs.Bottom_32AreaCode.GDGoldKeyObjects1= [];
gdjs.Bottom_32AreaCode.GDGoldKeyObjects2= [];
gdjs.Bottom_32AreaCode.GDGoldKeyObjects3= [];
gdjs.Bottom_32AreaCode.GDGoldKeyObjects4= [];
gdjs.Bottom_32AreaCode.GDGoldKeyObjects5= [];
gdjs.Bottom_32AreaCode.GDGoldKeyObjects6= [];
gdjs.Bottom_32AreaCode.GDDoorLockObjects1= [];
gdjs.Bottom_32AreaCode.GDDoorLockObjects2= [];
gdjs.Bottom_32AreaCode.GDDoorLockObjects3= [];
gdjs.Bottom_32AreaCode.GDDoorLockObjects4= [];
gdjs.Bottom_32AreaCode.GDDoorLockObjects5= [];
gdjs.Bottom_32AreaCode.GDDoorLockObjects6= [];


gdjs.Bottom_32AreaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() == "Top");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TopDown_Character"), gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2);
{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2[i].setPosition(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("X Coordinate").getAsNumber(),runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Y Coordinate").getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Bottom");
}}

}


};gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDNewTileMapObjects1Objects = Hashtable.newFrom({"NewTileMap": gdjs.Bottom_32AreaCode.GDNewTileMapObjects1});
gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTieGuyObjects1Objects = Hashtable.newFrom({"TieGuy": gdjs.Bottom_32AreaCode.GDTieGuyObjects1});
gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTopDown_95959595CharacterObjects1Objects = Hashtable.newFrom({"TopDown_Character": gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects1});
gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDDoorLockObjects1Objects = Hashtable.newFrom({"DoorLock": gdjs.Bottom_32AreaCode.GDDoorLockObjects1});
gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTopDown_95959595CharacterObjects1Objects = Hashtable.newFrom({"TopDown_Character": gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects1});
gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDSceneLoaderObjects1Objects = Hashtable.newFrom({"SceneLoader": gdjs.Bottom_32AreaCode.GDSceneLoaderObjects1});
gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTopDown_95959595CharacterObjects3Objects = Hashtable.newFrom({"TopDown_Character": gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects3});
gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTieGuyObjects3Objects = Hashtable.newFrom({"TieGuy": gdjs.Bottom_32AreaCode.GDTieGuyObjects3});
gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTopDown_95959595CharacterObjects3Objects = Hashtable.newFrom({"TopDown_Character": gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects3});
gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDDoorLockObjects3Objects = Hashtable.newFrom({"DoorLock": gdjs.Bottom_32AreaCode.GDDoorLockObjects3});
gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTopDown_95959595CharacterObjects3Objects = Hashtable.newFrom({"TopDown_Character": gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects3});
gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTieGuyObjects3Objects = Hashtable.newFrom({"TieGuy": gdjs.Bottom_32AreaCode.GDTieGuyObjects3});
gdjs.Bottom_32AreaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("TieQuest").getChild("Status").getAsString() == "Declined");
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.startFrom("TieGuyReQuest");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("TieQuest").getChild("Status").getAsString() == "Accepted");
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.startFrom("TieGuyHurry");
}}

}


};gdjs.Bottom_32AreaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(5).getChild("TieQuest").getChild("Seen").getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.startFrom("PostStorageKey_NoTieQuest_MrTie");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("TieQuest").getChild("Status").getAsString() == "Accepted");
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.startFrom("PostStorageKey_AcceptedTieQuest_MrTie");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("TieQuest").getChild("Status").getAsString() == "Declined");
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.startFrom("PostStorageKey_DeclinedTieQuest_MrTie");
}}

}


};gdjs.Bottom_32AreaCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(5).getChild("IntroSeen").getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.startFrom("TieGuy Start");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(5).getChild("IntroSeen").getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(5).getChild("MayorQuest").getChild("Seen").getAsBoolean();
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.startFrom("TieGuy_PreQuest");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(5).getChild("MayorQuest").getChild("Seen").getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.startFrom("TieGuyPostQuest");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(5).getChild("TieQuest").getChild("Seen").getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Bottom_32AreaCode.eventsList1(runtimeScene);} //End of subevents
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

{ //Subevents
gdjs.Bottom_32AreaCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Monocle").getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.startFrom("PostMonocle_MrTie");
}}

}


};gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTopDown_95959595CharacterObjects2Objects = Hashtable.newFrom({"TopDown_Character": gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2});
gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDDoorLockObjects2Objects = Hashtable.newFrom({"DoorLock": gdjs.Bottom_32AreaCode.GDDoorLockObjects2});
gdjs.Bottom_32AreaCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Bottom_32AreaCode.GDTieGuyObjects2, gdjs.Bottom_32AreaCode.GDTieGuyObjects3);

gdjs.copyArray(gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2, gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTopDown_95959595CharacterObjects3Objects, gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTieGuyObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Bottom_32AreaCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Bottom_32AreaCode.GDDoorLockObjects2 */
/* Reuse gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTopDown_95959595CharacterObjects2Objects, gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDDoorLockObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.dialogueTree.startFrom("DoorLock_Mayor");
}}

}


};gdjs.Bottom_32AreaCode.eventsList5 = function(runtimeScene) {

{


gdjs.Bottom_32AreaCode.eventsList4(runtimeScene);
}


};gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTopDown_95959595CharacterObjects2Objects = Hashtable.newFrom({"TopDown_Character": gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2});
gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTieGuyObjects2Objects = Hashtable.newFrom({"TieGuy": gdjs.Bottom_32AreaCode.GDTieGuyObjects2});
gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTopDown_95959595CharacterObjects2Objects = Hashtable.newFrom({"TopDown_Character": gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2});
gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDDoorLockObjects2Objects = Hashtable.newFrom({"DoorLock": gdjs.Bottom_32AreaCode.GDDoorLockObjects2});
gdjs.Bottom_32AreaCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13747700);
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


};gdjs.Bottom_32AreaCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13755412);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13757348);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13758788);
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


};gdjs.Bottom_32AreaCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.compareVariable("TieQuest", "Accepted");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("TieQuest").getChild("Status").setString("Accepted");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.compareVariable("TieQuest", "Declined");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("TieQuest").getChild("Status").setString("Declined");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.branchTitleIs("TieGuyAltQuest");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("TieQuest").getChild("Seen").setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("UnlockMayorHouse");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DoorLock"), gdjs.Bottom_32AreaCode.GDDoorLockObjects2);
{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDDoorLockObjects2.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDDoorLockObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("TieMonocleSprite");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TieGuy"), gdjs.Bottom_32AreaCode.GDTieGuyObjects2);
{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDTieGuyObjects2.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDTieGuyObjects2[i].getBehavior("Animation").setAnimationName("MonocleTie");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("TieMonocleEnding");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MrTieEnding", false);
}}

}


};gdjs.Bottom_32AreaCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Bottom_32AreaCode.GDDialogueObjects2);
gdjs.copyArray(runtimeScene.getObjects("DialogueBackground"), gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Bottom_32AreaCode.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2[i].getBehavior("Resizable").setWidth(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "UI", 0));
}
}{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDDialogueObjects2[i].setWrappingWidth((( gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2.length === 0 ) ? 0 :gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2[0].getWidth()) * 0.9);
}
}{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2[i].getWidth()),gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2[i].getHeight()));
}
}{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDDialogueObjects2[i].setPosition((( gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2.length === 0 ) ? 0 :gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2[0].getPointX("")) + 0.03 * (( gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2.length === 0 ) ? 0 :gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2[0].getWidth()),(( gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2.length === 0 ) ? 0 :gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2[0].getPointY("")) + 10);
}
}{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDOptionsObjects2[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "UI", 0) / 2,gdjs.evtTools.camera.getCameraHeight(runtimeScene, "UI", 0) - 50);
}
}}

}


{

gdjs.Bottom_32AreaCode.GDDoorLockObjects2.length = 0;

gdjs.Bottom_32AreaCode.GDTieGuyObjects2.length = 0;

gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Bottom_32AreaCode.GDDoorLockObjects2_1final.length = 0;
gdjs.Bottom_32AreaCode.GDTieGuyObjects2_1final.length = 0;
gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TieGuy"), gdjs.Bottom_32AreaCode.GDTieGuyObjects3);
gdjs.copyArray(runtimeScene.getObjects("TopDown_Character"), gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects3);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTopDown_95959595CharacterObjects3Objects, gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTieGuyObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Bottom_32AreaCode.GDTieGuyObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Bottom_32AreaCode.GDTieGuyObjects2_1final.indexOf(gdjs.Bottom_32AreaCode.GDTieGuyObjects3[j]) === -1 )
            gdjs.Bottom_32AreaCode.GDTieGuyObjects2_1final.push(gdjs.Bottom_32AreaCode.GDTieGuyObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2_1final.indexOf(gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects3[j]) === -1 )
            gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2_1final.push(gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("DoorLock"), gdjs.Bottom_32AreaCode.GDDoorLockObjects3);
gdjs.copyArray(runtimeScene.getObjects("TopDown_Character"), gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects3);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTopDown_95959595CharacterObjects3Objects, gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDDoorLockObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Bottom_32AreaCode.GDDoorLockObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Bottom_32AreaCode.GDDoorLockObjects2_1final.indexOf(gdjs.Bottom_32AreaCode.GDDoorLockObjects3[j]) === -1 )
            gdjs.Bottom_32AreaCode.GDDoorLockObjects2_1final.push(gdjs.Bottom_32AreaCode.GDDoorLockObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2_1final.indexOf(gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects3[j]) === -1 )
            gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2_1final.push(gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Bottom_32AreaCode.GDDoorLockObjects2_1final, gdjs.Bottom_32AreaCode.GDDoorLockObjects2);
gdjs.copyArray(gdjs.Bottom_32AreaCode.GDTieGuyObjects2_1final, gdjs.Bottom_32AreaCode.GDTieGuyObjects2);
gdjs.copyArray(gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2_1final, gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2);
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
for (var i = 0, k = 0, l = gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2.length;i<l;++i) {
    if ( gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2[i].getBehavior("NavMeshPathfindingBehavior").Speed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2[k] = gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2[i];
        ++k;
    }
}
gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13726620);
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Bottom_32AreaCode.GDDialogueObjects2);
gdjs.copyArray(runtimeScene.getObjects("DialogueBackground"), gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Bottom_32AreaCode.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDDialogueObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDOptionsObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrollText");
}{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(false);
}
{ //Subevents
gdjs.Bottom_32AreaCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DoorLock"), gdjs.Bottom_32AreaCode.GDDoorLockObjects2);
gdjs.copyArray(runtimeScene.getObjects("TieGuy"), gdjs.Bottom_32AreaCode.GDTieGuyObjects2);
gdjs.copyArray(runtimeScene.getObjects("TopDown_Character"), gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTopDown_95959595CharacterObjects2Objects, gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTieGuyObjects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTopDown_95959595CharacterObjects2Objects, gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDDoorLockObjects2Objects, true, runtimeScene, false);
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
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Bottom_32AreaCode.GDDialogueObjects2);
gdjs.copyArray(runtimeScene.getObjects("DialogueBackground"), gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Bottom_32AreaCode.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDDialogueObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDOptionsObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2[i].hide();
}
}{gdjs.dialogueTree.saveState(runtimeScene.getGame().getVariables().getFromIndex(6));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Bottom_32AreaCode.GDDialogueObjects2);
{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDDialogueObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.Bottom_32AreaCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Bottom_32AreaCode.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDOptionsObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Bottom_32AreaCode.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDOptionsObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.Bottom_32AreaCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasSelectedOptionChanged();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Bottom_32AreaCode.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDOptionsObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("->"));
}
}}

}


{


gdjs.Bottom_32AreaCode.eventsList8(runtimeScene);
}


};gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTopDown_95959595CharacterObjects2Objects = Hashtable.newFrom({"TopDown_Character": gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2});
gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDGoldKeyObjects2Objects = Hashtable.newFrom({"GoldKey": gdjs.Bottom_32AreaCode.GDGoldKeyObjects2});
gdjs.Bottom_32AreaCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GoldKey"), gdjs.Bottom_32AreaCode.GDGoldKeyObjects2);
gdjs.copyArray(runtimeScene.getObjects("TopDown_Character"), gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTopDown_95959595CharacterObjects2Objects, gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDGoldKeyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Bottom_32AreaCode.GDGoldKeyObjects2 */
{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDGoldKeyObjects2.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDGoldKeyObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).getChild("StorageKey").setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(7).getChild("MayorKey").getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.setVariable("hasMayorKey", true);
}}

}


};gdjs.Bottom_32AreaCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Bottom_32AreaCode.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogueBackground"), gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Bottom_32AreaCode.GDOptionsObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "Dialogue");
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 1920, 1080);
}{gdjs.evtTools.window.centerWindow(runtimeScene);
}{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDDialogueObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDDialogueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDOptionsObjects1.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDOptionsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects1.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects1[i].hide();
}
}{gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.func(runtimeScene, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.dialogueTree.loadState(runtimeScene.getGame().getVariables().getFromIndex(6));
}
{ //Subevents
gdjs.Bottom_32AreaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewTileMap"), gdjs.Bottom_32AreaCode.GDNewTileMapObjects1);
gdjs.copyArray(runtimeScene.getObjects("TieGuy"), gdjs.Bottom_32AreaCode.GDTieGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopDown_Character"), gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects1);
{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects1[i].separateFromObjectsList(gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDNewTileMapObjects1Objects, false);
}
}{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1280, 1280, "", 0);
}{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects1[i].separateFromObjectsList(gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTieGuyObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DoorLock"), gdjs.Bottom_32AreaCode.GDDoorLockObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopDown_Character"), gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTopDown_95959595CharacterObjects1Objects, gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDDoorLockObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects1[i].getBehavior("NavMeshPathfindingBehavior").SetDestination((gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects1[i].getPointX("")), (gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects1[i].getPointY("")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DialogueBackground"), gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects1.length;i<l;++i) {
    if ( !(gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects1[k] = gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects1[i];
        ++k;
    }
}
gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TopDown_Character"), gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects1);
{for(var i = 0, len = gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects1[i].getBehavior("NavMeshPathfindingBehavior").SetDestination(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SceneLoader"), gdjs.Bottom_32AreaCode.GDSceneLoaderObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopDown_Character"), gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDTopDown_95959595CharacterObjects1Objects, gdjs.Bottom_32AreaCode.mapOfGDgdjs_9546Bottom_959532AreaCode_9546GDSceneLoaderObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Top Area", false);
}}

}


{


gdjs.Bottom_32AreaCode.eventsList9(runtimeScene);
}


{


gdjs.Bottom_32AreaCode.eventsList10(runtimeScene);
}


};

gdjs.Bottom_32AreaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects1.length = 0;
gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2.length = 0;
gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects3.length = 0;
gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects4.length = 0;
gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects5.length = 0;
gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects6.length = 0;
gdjs.Bottom_32AreaCode.GDPlantObjects1.length = 0;
gdjs.Bottom_32AreaCode.GDPlantObjects2.length = 0;
gdjs.Bottom_32AreaCode.GDPlantObjects3.length = 0;
gdjs.Bottom_32AreaCode.GDPlantObjects4.length = 0;
gdjs.Bottom_32AreaCode.GDPlantObjects5.length = 0;
gdjs.Bottom_32AreaCode.GDPlantObjects6.length = 0;
gdjs.Bottom_32AreaCode.GDJoystickObjects1.length = 0;
gdjs.Bottom_32AreaCode.GDJoystickObjects2.length = 0;
gdjs.Bottom_32AreaCode.GDJoystickObjects3.length = 0;
gdjs.Bottom_32AreaCode.GDJoystickObjects4.length = 0;
gdjs.Bottom_32AreaCode.GDJoystickObjects5.length = 0;
gdjs.Bottom_32AreaCode.GDJoystickObjects6.length = 0;
gdjs.Bottom_32AreaCode.GDNewTileMapObjects1.length = 0;
gdjs.Bottom_32AreaCode.GDNewTileMapObjects2.length = 0;
gdjs.Bottom_32AreaCode.GDNewTileMapObjects3.length = 0;
gdjs.Bottom_32AreaCode.GDNewTileMapObjects4.length = 0;
gdjs.Bottom_32AreaCode.GDNewTileMapObjects5.length = 0;
gdjs.Bottom_32AreaCode.GDNewTileMapObjects6.length = 0;
gdjs.Bottom_32AreaCode.GDSceneLoaderObjects1.length = 0;
gdjs.Bottom_32AreaCode.GDSceneLoaderObjects2.length = 0;
gdjs.Bottom_32AreaCode.GDSceneLoaderObjects3.length = 0;
gdjs.Bottom_32AreaCode.GDSceneLoaderObjects4.length = 0;
gdjs.Bottom_32AreaCode.GDSceneLoaderObjects5.length = 0;
gdjs.Bottom_32AreaCode.GDSceneLoaderObjects6.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueObjects1.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueObjects2.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueObjects3.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueObjects4.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueObjects5.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueObjects6.length = 0;
gdjs.Bottom_32AreaCode.GDOptionsObjects1.length = 0;
gdjs.Bottom_32AreaCode.GDOptionsObjects2.length = 0;
gdjs.Bottom_32AreaCode.GDOptionsObjects3.length = 0;
gdjs.Bottom_32AreaCode.GDOptionsObjects4.length = 0;
gdjs.Bottom_32AreaCode.GDOptionsObjects5.length = 0;
gdjs.Bottom_32AreaCode.GDOptionsObjects6.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects1.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects3.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects4.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects5.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects6.length = 0;
gdjs.Bottom_32AreaCode.GDTieGuyObjects1.length = 0;
gdjs.Bottom_32AreaCode.GDTieGuyObjects2.length = 0;
gdjs.Bottom_32AreaCode.GDTieGuyObjects3.length = 0;
gdjs.Bottom_32AreaCode.GDTieGuyObjects4.length = 0;
gdjs.Bottom_32AreaCode.GDTieGuyObjects5.length = 0;
gdjs.Bottom_32AreaCode.GDTieGuyObjects6.length = 0;
gdjs.Bottom_32AreaCode.GDGoldKeyObjects1.length = 0;
gdjs.Bottom_32AreaCode.GDGoldKeyObjects2.length = 0;
gdjs.Bottom_32AreaCode.GDGoldKeyObjects3.length = 0;
gdjs.Bottom_32AreaCode.GDGoldKeyObjects4.length = 0;
gdjs.Bottom_32AreaCode.GDGoldKeyObjects5.length = 0;
gdjs.Bottom_32AreaCode.GDGoldKeyObjects6.length = 0;
gdjs.Bottom_32AreaCode.GDDoorLockObjects1.length = 0;
gdjs.Bottom_32AreaCode.GDDoorLockObjects2.length = 0;
gdjs.Bottom_32AreaCode.GDDoorLockObjects3.length = 0;
gdjs.Bottom_32AreaCode.GDDoorLockObjects4.length = 0;
gdjs.Bottom_32AreaCode.GDDoorLockObjects5.length = 0;
gdjs.Bottom_32AreaCode.GDDoorLockObjects6.length = 0;

gdjs.Bottom_32AreaCode.eventsList11(runtimeScene);
gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects1.length = 0;
gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects2.length = 0;
gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects3.length = 0;
gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects4.length = 0;
gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects5.length = 0;
gdjs.Bottom_32AreaCode.GDTopDown_9595CharacterObjects6.length = 0;
gdjs.Bottom_32AreaCode.GDPlantObjects1.length = 0;
gdjs.Bottom_32AreaCode.GDPlantObjects2.length = 0;
gdjs.Bottom_32AreaCode.GDPlantObjects3.length = 0;
gdjs.Bottom_32AreaCode.GDPlantObjects4.length = 0;
gdjs.Bottom_32AreaCode.GDPlantObjects5.length = 0;
gdjs.Bottom_32AreaCode.GDPlantObjects6.length = 0;
gdjs.Bottom_32AreaCode.GDJoystickObjects1.length = 0;
gdjs.Bottom_32AreaCode.GDJoystickObjects2.length = 0;
gdjs.Bottom_32AreaCode.GDJoystickObjects3.length = 0;
gdjs.Bottom_32AreaCode.GDJoystickObjects4.length = 0;
gdjs.Bottom_32AreaCode.GDJoystickObjects5.length = 0;
gdjs.Bottom_32AreaCode.GDJoystickObjects6.length = 0;
gdjs.Bottom_32AreaCode.GDNewTileMapObjects1.length = 0;
gdjs.Bottom_32AreaCode.GDNewTileMapObjects2.length = 0;
gdjs.Bottom_32AreaCode.GDNewTileMapObjects3.length = 0;
gdjs.Bottom_32AreaCode.GDNewTileMapObjects4.length = 0;
gdjs.Bottom_32AreaCode.GDNewTileMapObjects5.length = 0;
gdjs.Bottom_32AreaCode.GDNewTileMapObjects6.length = 0;
gdjs.Bottom_32AreaCode.GDSceneLoaderObjects1.length = 0;
gdjs.Bottom_32AreaCode.GDSceneLoaderObjects2.length = 0;
gdjs.Bottom_32AreaCode.GDSceneLoaderObjects3.length = 0;
gdjs.Bottom_32AreaCode.GDSceneLoaderObjects4.length = 0;
gdjs.Bottom_32AreaCode.GDSceneLoaderObjects5.length = 0;
gdjs.Bottom_32AreaCode.GDSceneLoaderObjects6.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueObjects1.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueObjects2.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueObjects3.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueObjects4.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueObjects5.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueObjects6.length = 0;
gdjs.Bottom_32AreaCode.GDOptionsObjects1.length = 0;
gdjs.Bottom_32AreaCode.GDOptionsObjects2.length = 0;
gdjs.Bottom_32AreaCode.GDOptionsObjects3.length = 0;
gdjs.Bottom_32AreaCode.GDOptionsObjects4.length = 0;
gdjs.Bottom_32AreaCode.GDOptionsObjects5.length = 0;
gdjs.Bottom_32AreaCode.GDOptionsObjects6.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects1.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects2.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects3.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects4.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects5.length = 0;
gdjs.Bottom_32AreaCode.GDDialogueBackgroundObjects6.length = 0;
gdjs.Bottom_32AreaCode.GDTieGuyObjects1.length = 0;
gdjs.Bottom_32AreaCode.GDTieGuyObjects2.length = 0;
gdjs.Bottom_32AreaCode.GDTieGuyObjects3.length = 0;
gdjs.Bottom_32AreaCode.GDTieGuyObjects4.length = 0;
gdjs.Bottom_32AreaCode.GDTieGuyObjects5.length = 0;
gdjs.Bottom_32AreaCode.GDTieGuyObjects6.length = 0;
gdjs.Bottom_32AreaCode.GDGoldKeyObjects1.length = 0;
gdjs.Bottom_32AreaCode.GDGoldKeyObjects2.length = 0;
gdjs.Bottom_32AreaCode.GDGoldKeyObjects3.length = 0;
gdjs.Bottom_32AreaCode.GDGoldKeyObjects4.length = 0;
gdjs.Bottom_32AreaCode.GDGoldKeyObjects5.length = 0;
gdjs.Bottom_32AreaCode.GDGoldKeyObjects6.length = 0;
gdjs.Bottom_32AreaCode.GDDoorLockObjects1.length = 0;
gdjs.Bottom_32AreaCode.GDDoorLockObjects2.length = 0;
gdjs.Bottom_32AreaCode.GDDoorLockObjects3.length = 0;
gdjs.Bottom_32AreaCode.GDDoorLockObjects4.length = 0;
gdjs.Bottom_32AreaCode.GDDoorLockObjects5.length = 0;
gdjs.Bottom_32AreaCode.GDDoorLockObjects6.length = 0;


return;

}

gdjs['Bottom_32AreaCode'] = gdjs.Bottom_32AreaCode;
