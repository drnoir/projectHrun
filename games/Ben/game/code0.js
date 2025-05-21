gdjs.houseCode = {};
gdjs.houseCode.localVariables = [];
gdjs.houseCode.GDNewTileMapObjects1= [];
gdjs.houseCode.GDNewTileMapObjects2= [];
gdjs.houseCode.GDtop_9595wallObjects1= [];
gdjs.houseCode.GDtop_9595wallObjects2= [];
gdjs.houseCode.GDsidesObjects1= [];
gdjs.houseCode.GDsidesObjects2= [];
gdjs.houseCode.GDbottom_9595wallObjects1= [];
gdjs.houseCode.GDbottom_9595wallObjects2= [];
gdjs.houseCode.GDboundariesObjects1= [];
gdjs.houseCode.GDboundariesObjects2= [];
gdjs.houseCode.GDNewSpriteObjects1= [];
gdjs.houseCode.GDNewSpriteObjects2= [];
gdjs.houseCode.GDBlacksmithObjects1= [];
gdjs.houseCode.GDBlacksmithObjects2= [];
gdjs.houseCode.GDdoorObjects1= [];
gdjs.houseCode.GDdoorObjects2= [];
gdjs.houseCode.GDtext_9595boxObjects1= [];
gdjs.houseCode.GDtext_9595boxObjects2= [];
gdjs.houseCode.GDfarmer_9595taskObjects1= [];
gdjs.houseCode.GDfarmer_9595taskObjects2= [];
gdjs.houseCode.GDtext_9595box2Objects1= [];
gdjs.houseCode.GDtext_9595box2Objects2= [];
gdjs.houseCode.GDmerchant_9595textObjects1= [];
gdjs.houseCode.GDmerchant_9595textObjects2= [];
gdjs.houseCode.GDplayer_9595textObjects1= [];
gdjs.houseCode.GDplayer_9595textObjects2= [];
gdjs.houseCode.GDplayertextObjects1= [];
gdjs.houseCode.GDplayertextObjects2= [];
gdjs.houseCode.GDplyrtextObjects1= [];
gdjs.houseCode.GDplyrtextObjects2= [];
gdjs.houseCode.GDNewTextObjects1= [];
gdjs.houseCode.GDNewTextObjects2= [];
gdjs.houseCode.GDplayerObjects1= [];
gdjs.houseCode.GDplayerObjects2= [];


gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.houseCode.GDplayerObjects1});
gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.houseCode.GDdoorObjects1});
gdjs.houseCode.asyncCallback13264316 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.houseCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}gdjs.houseCode.localVariables.length = 0;
}
gdjs.houseCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.houseCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.houseCode.asyncCallback13264316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.houseCode.GDplayerObjects1});
gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDBlacksmithObjects1Objects = Hashtable.newFrom({"Blacksmith": gdjs.houseCode.GDBlacksmithObjects1});
gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDBlacksmithObjects1Objects = Hashtable.newFrom({"Blacksmith": gdjs.houseCode.GDBlacksmithObjects1});
gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.houseCode.GDplayerObjects1});
gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDBlacksmithObjects1Objects = Hashtable.newFrom({"Blacksmith": gdjs.houseCode.GDBlacksmithObjects1});
gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDBlacksmithObjects1Objects = Hashtable.newFrom({"Blacksmith": gdjs.houseCode.GDBlacksmithObjects1});
gdjs.houseCode.asyncCallback13266788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.houseCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("farmer_task"), gdjs.houseCode.GDfarmer_9595taskObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("player_text"), gdjs.houseCode.GDplayer_9595textObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("playertext"), gdjs.houseCode.GDplayertextObjects2);

gdjs.copyArray(runtimeScene.getObjects("text_box"), gdjs.houseCode.GDtext_9595boxObjects2);
{for(var i = 0, len = gdjs.houseCode.GDplayer_9595textObjects2.length ;i < len;++i) {
    gdjs.houseCode.GDplayer_9595textObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.houseCode.GDplayertextObjects2.length ;i < len;++i) {
    gdjs.houseCode.GDplayertextObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.houseCode.GDfarmer_9595taskObjects2.length ;i < len;++i) {
    gdjs.houseCode.GDfarmer_9595taskObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.houseCode.GDtext_9595boxObjects2.length ;i < len;++i) {
    gdjs.houseCode.GDtext_9595boxObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}gdjs.houseCode.localVariables.length = 0;
}
gdjs.houseCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.houseCode.localVariables);
for (const obj of gdjs.houseCode.GDplayer_9595textObjects1) asyncObjectsList.addObject("player_text", obj);
for (const obj of gdjs.houseCode.GDplayertextObjects1) asyncObjectsList.addObject("playertext", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.houseCode.asyncCallback13266788(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.houseCode.GDplayerObjects1});
gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDBlacksmithObjects1Objects = Hashtable.newFrom({"Blacksmith": gdjs.houseCode.GDBlacksmithObjects1});
gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.houseCode.GDplayerObjects1});
gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDBlacksmithObjects1Objects = Hashtable.newFrom({"Blacksmith": gdjs.houseCode.GDBlacksmithObjects1});
gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDBlacksmithObjects1Objects = Hashtable.newFrom({"Blacksmith": gdjs.houseCode.GDBlacksmithObjects1});
gdjs.houseCode.asyncCallback13269436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.houseCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.houseCode.GDNewTextObjects2);

gdjs.copyArray(runtimeScene.getObjects("merchant_text"), gdjs.houseCode.GDmerchant_9595textObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("plyrtext"), gdjs.houseCode.GDplyrtextObjects2);

gdjs.copyArray(runtimeScene.getObjects("text_box2"), gdjs.houseCode.GDtext_9595box2Objects2);
{for(var i = 0, len = gdjs.houseCode.GDplyrtextObjects2.length ;i < len;++i) {
    gdjs.houseCode.GDplyrtextObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.houseCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.houseCode.GDNewTextObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.houseCode.GDtext_9595box2Objects2.length ;i < len;++i) {
    gdjs.houseCode.GDtext_9595box2Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.houseCode.GDmerchant_9595textObjects2.length ;i < len;++i) {
    gdjs.houseCode.GDmerchant_9595textObjects2[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}gdjs.houseCode.localVariables.length = 0;
}
gdjs.houseCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.houseCode.localVariables);
for (const obj of gdjs.houseCode.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
for (const obj of gdjs.houseCode.GDplyrtextObjects1) asyncObjectsList.addObject("plyrtext", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.houseCode.asyncCallback13269436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.houseCode.GDplayerObjects1});
gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDBlacksmithObjects1Objects = Hashtable.newFrom({"Blacksmith": gdjs.houseCode.GDBlacksmithObjects1});
gdjs.houseCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.houseCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("farmer_task"), gdjs.houseCode.GDfarmer_9595taskObjects1);
gdjs.copyArray(runtimeScene.getObjects("merchant_text"), gdjs.houseCode.GDmerchant_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.houseCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("player_text"), gdjs.houseCode.GDplayer_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("playertext"), gdjs.houseCode.GDplayertextObjects1);
gdjs.copyArray(runtimeScene.getObjects("plyrtext"), gdjs.houseCode.GDplyrtextObjects1);
gdjs.copyArray(runtimeScene.getObjects("text_box"), gdjs.houseCode.GDtext_9595boxObjects1);
gdjs.copyArray(runtimeScene.getObjects("text_box2"), gdjs.houseCode.GDtext_9595box2Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber((( gdjs.houseCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.houseCode.GDplayerObjects1[0].getPointX("")));
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber((( gdjs.houseCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.houseCode.GDplayerObjects1[0].getPointY("")));
}{for(var i = 0, len = gdjs.houseCode.GDtext_9595boxObjects1.length ;i < len;++i) {
    gdjs.houseCode.GDtext_9595boxObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.houseCode.GDfarmer_9595taskObjects1.length ;i < len;++i) {
    gdjs.houseCode.GDfarmer_9595taskObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.houseCode.GDtext_9595box2Objects1.length ;i < len;++i) {
    gdjs.houseCode.GDtext_9595box2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.houseCode.GDmerchant_9595textObjects1.length ;i < len;++i) {
    gdjs.houseCode.GDmerchant_9595textObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.houseCode.GDplayer_9595textObjects1.length ;i < len;++i) {
    gdjs.houseCode.GDplayer_9595textObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.houseCode.GDplayertextObjects1.length ;i < len;++i) {
    gdjs.houseCode.GDplayertextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.houseCode.GDplyrtextObjects1.length ;i < len;++i) {
    gdjs.houseCode.GDplyrtextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.houseCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.houseCode.GDNewTextObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.houseCode.GDplayerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}{for(var i = 0, len = gdjs.houseCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.houseCode.GDplayerObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("door"), gdjs.houseCode.GDdoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.houseCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDplayerObjects1Objects, gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDdoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "hub world", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == -(1));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.houseCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.houseCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.houseCode.GDplayerObjects1[i].setPosition(693,730);
}
}
{ //Subevents
gdjs.houseCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Blacksmith"), gdjs.houseCode.GDBlacksmithObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.houseCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDplayerObjects1Objects, gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDBlacksmithObjects1Objects, 300, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDBlacksmithObjects1Objects, runtimeScene, true, false);
}
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Blacksmith"), gdjs.houseCode.GDBlacksmithObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.houseCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDplayerObjects1Objects, gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDBlacksmithObjects1Objects, 300, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDBlacksmithObjects1Objects, runtimeScene, true, false);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_text"), gdjs.houseCode.GDplayer_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("playertext"), gdjs.houseCode.GDplayertextObjects1);
{for(var i = 0, len = gdjs.houseCode.GDplayer_9595textObjects1.length ;i < len;++i) {
    gdjs.houseCode.GDplayer_9595textObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.houseCode.GDplayertextObjects1.length ;i < len;++i) {
    gdjs.houseCode.GDplayertextObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.houseCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Blacksmith"), gdjs.houseCode.GDBlacksmithObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.houseCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDplayerObjects1Objects, gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDBlacksmithObjects1Objects, 300, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("farmer_task"), gdjs.houseCode.GDfarmer_9595taskObjects1);
gdjs.copyArray(runtimeScene.getObjects("text_box"), gdjs.houseCode.GDtext_9595boxObjects1);
{for(var i = 0, len = gdjs.houseCode.GDtext_9595boxObjects1.length ;i < len;++i) {
    gdjs.houseCode.GDtext_9595boxObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.houseCode.GDfarmer_9595taskObjects1.length ;i < len;++i) {
    gdjs.houseCode.GDfarmer_9595taskObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Blacksmith"), gdjs.houseCode.GDBlacksmithObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.houseCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDplayerObjects1Objects, gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDBlacksmithObjects1Objects, 300, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDBlacksmithObjects1Objects, runtimeScene, true, false);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.houseCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("plyrtext"), gdjs.houseCode.GDplyrtextObjects1);
{for(var i = 0, len = gdjs.houseCode.GDplyrtextObjects1.length ;i < len;++i) {
    gdjs.houseCode.GDplyrtextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.houseCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.houseCode.GDNewTextObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.houseCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Blacksmith"), gdjs.houseCode.GDBlacksmithObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.houseCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDplayerObjects1Objects, gdjs.houseCode.mapOfGDgdjs_9546houseCode_9546GDBlacksmithObjects1Objects, 300, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("merchant_text"), gdjs.houseCode.GDmerchant_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("text_box2"), gdjs.houseCode.GDtext_9595box2Objects1);
{for(var i = 0, len = gdjs.houseCode.GDtext_9595box2Objects1.length ;i < len;++i) {
    gdjs.houseCode.GDtext_9595box2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.houseCode.GDmerchant_9595textObjects1.length ;i < len;++i) {
    gdjs.houseCode.GDmerchant_9595textObjects1[i].hide();
}
}}

}


};

gdjs.houseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.houseCode.GDNewTileMapObjects1.length = 0;
gdjs.houseCode.GDNewTileMapObjects2.length = 0;
gdjs.houseCode.GDtop_9595wallObjects1.length = 0;
gdjs.houseCode.GDtop_9595wallObjects2.length = 0;
gdjs.houseCode.GDsidesObjects1.length = 0;
gdjs.houseCode.GDsidesObjects2.length = 0;
gdjs.houseCode.GDbottom_9595wallObjects1.length = 0;
gdjs.houseCode.GDbottom_9595wallObjects2.length = 0;
gdjs.houseCode.GDboundariesObjects1.length = 0;
gdjs.houseCode.GDboundariesObjects2.length = 0;
gdjs.houseCode.GDNewSpriteObjects1.length = 0;
gdjs.houseCode.GDNewSpriteObjects2.length = 0;
gdjs.houseCode.GDBlacksmithObjects1.length = 0;
gdjs.houseCode.GDBlacksmithObjects2.length = 0;
gdjs.houseCode.GDdoorObjects1.length = 0;
gdjs.houseCode.GDdoorObjects2.length = 0;
gdjs.houseCode.GDtext_9595boxObjects1.length = 0;
gdjs.houseCode.GDtext_9595boxObjects2.length = 0;
gdjs.houseCode.GDfarmer_9595taskObjects1.length = 0;
gdjs.houseCode.GDfarmer_9595taskObjects2.length = 0;
gdjs.houseCode.GDtext_9595box2Objects1.length = 0;
gdjs.houseCode.GDtext_9595box2Objects2.length = 0;
gdjs.houseCode.GDmerchant_9595textObjects1.length = 0;
gdjs.houseCode.GDmerchant_9595textObjects2.length = 0;
gdjs.houseCode.GDplayer_9595textObjects1.length = 0;
gdjs.houseCode.GDplayer_9595textObjects2.length = 0;
gdjs.houseCode.GDplayertextObjects1.length = 0;
gdjs.houseCode.GDplayertextObjects2.length = 0;
gdjs.houseCode.GDplyrtextObjects1.length = 0;
gdjs.houseCode.GDplyrtextObjects2.length = 0;
gdjs.houseCode.GDNewTextObjects1.length = 0;
gdjs.houseCode.GDNewTextObjects2.length = 0;
gdjs.houseCode.GDplayerObjects1.length = 0;
gdjs.houseCode.GDplayerObjects2.length = 0;

gdjs.houseCode.eventsList3(runtimeScene);
gdjs.houseCode.GDNewTileMapObjects1.length = 0;
gdjs.houseCode.GDNewTileMapObjects2.length = 0;
gdjs.houseCode.GDtop_9595wallObjects1.length = 0;
gdjs.houseCode.GDtop_9595wallObjects2.length = 0;
gdjs.houseCode.GDsidesObjects1.length = 0;
gdjs.houseCode.GDsidesObjects2.length = 0;
gdjs.houseCode.GDbottom_9595wallObjects1.length = 0;
gdjs.houseCode.GDbottom_9595wallObjects2.length = 0;
gdjs.houseCode.GDboundariesObjects1.length = 0;
gdjs.houseCode.GDboundariesObjects2.length = 0;
gdjs.houseCode.GDNewSpriteObjects1.length = 0;
gdjs.houseCode.GDNewSpriteObjects2.length = 0;
gdjs.houseCode.GDBlacksmithObjects1.length = 0;
gdjs.houseCode.GDBlacksmithObjects2.length = 0;
gdjs.houseCode.GDdoorObjects1.length = 0;
gdjs.houseCode.GDdoorObjects2.length = 0;
gdjs.houseCode.GDtext_9595boxObjects1.length = 0;
gdjs.houseCode.GDtext_9595boxObjects2.length = 0;
gdjs.houseCode.GDfarmer_9595taskObjects1.length = 0;
gdjs.houseCode.GDfarmer_9595taskObjects2.length = 0;
gdjs.houseCode.GDtext_9595box2Objects1.length = 0;
gdjs.houseCode.GDtext_9595box2Objects2.length = 0;
gdjs.houseCode.GDmerchant_9595textObjects1.length = 0;
gdjs.houseCode.GDmerchant_9595textObjects2.length = 0;
gdjs.houseCode.GDplayer_9595textObjects1.length = 0;
gdjs.houseCode.GDplayer_9595textObjects2.length = 0;
gdjs.houseCode.GDplayertextObjects1.length = 0;
gdjs.houseCode.GDplayertextObjects2.length = 0;
gdjs.houseCode.GDplyrtextObjects1.length = 0;
gdjs.houseCode.GDplyrtextObjects2.length = 0;
gdjs.houseCode.GDNewTextObjects1.length = 0;
gdjs.houseCode.GDNewTextObjects2.length = 0;
gdjs.houseCode.GDplayerObjects1.length = 0;
gdjs.houseCode.GDplayerObjects2.length = 0;


return;

}

gdjs['houseCode'] = gdjs.houseCode;
