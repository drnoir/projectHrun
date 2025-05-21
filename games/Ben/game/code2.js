gdjs.castleCode = {};
gdjs.castleCode.localVariables = [];
gdjs.castleCode.GDNewTileMapObjects1= [];
gdjs.castleCode.GDNewTileMapObjects2= [];
gdjs.castleCode.GDwallsObjects1= [];
gdjs.castleCode.GDwallsObjects2= [];
gdjs.castleCode.GDdoorObjects1= [];
gdjs.castleCode.GDdoorObjects2= [];
gdjs.castleCode.GDbookObjects1= [];
gdjs.castleCode.GDbookObjects2= [];
gdjs.castleCode.GDplayerObjects1= [];
gdjs.castleCode.GDplayerObjects2= [];


gdjs.castleCode.mapOfGDgdjs_9546castleCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.castleCode.GDplayerObjects1});
gdjs.castleCode.mapOfGDgdjs_9546castleCode_9546GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.castleCode.GDdoorObjects1});
gdjs.castleCode.mapOfGDgdjs_9546castleCode_9546GDbookObjects1Objects = Hashtable.newFrom({"book": gdjs.castleCode.GDbookObjects1});
gdjs.castleCode.mapOfGDgdjs_9546castleCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.castleCode.GDplayerObjects1});
gdjs.castleCode.mapOfGDgdjs_9546castleCode_9546GDbookObjects1Objects = Hashtable.newFrom({"book": gdjs.castleCode.GDbookObjects1});
gdjs.castleCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("book"), gdjs.castleCode.GDbookObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.castleCode.GDplayerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber((( gdjs.castleCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.castleCode.GDplayerObjects1[0].getPointX("")));
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber((( gdjs.castleCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.castleCode.GDplayerObjects1[0].getPointY("")));
}{for(var i = 0, len = gdjs.castleCode.GDbookObjects1.length ;i < len;++i) {
    gdjs.castleCode.GDbookObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("book"), gdjs.castleCode.GDbookObjects1);
{for(var i = 0, len = gdjs.castleCode.GDbookObjects1.length ;i < len;++i) {
    gdjs.castleCode.GDbookObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.castleCode.GDplayerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}{for(var i = 0, len = gdjs.castleCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.castleCode.GDplayerObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("door"), gdjs.castleCode.GDdoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.castleCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.castleCode.mapOfGDgdjs_9546castleCode_9546GDplayerObjects1Objects, gdjs.castleCode.mapOfGDgdjs_9546castleCode_9546GDdoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "hub world", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("book"), gdjs.castleCode.GDbookObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.castleCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.castleCode.mapOfGDgdjs_9546castleCode_9546GDbookObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.castleCode.mapOfGDgdjs_9546castleCode_9546GDplayerObjects1Objects, gdjs.castleCode.mapOfGDgdjs_9546castleCode_9546GDbookObjects1Objects, 300, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.castleCode.GDbookObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(5);
}{for(var i = 0, len = gdjs.castleCode.GDbookObjects1.length ;i < len;++i) {
    gdjs.castleCode.GDbookObjects1[i].hide();
}
}}

}


};

gdjs.castleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.castleCode.GDNewTileMapObjects1.length = 0;
gdjs.castleCode.GDNewTileMapObjects2.length = 0;
gdjs.castleCode.GDwallsObjects1.length = 0;
gdjs.castleCode.GDwallsObjects2.length = 0;
gdjs.castleCode.GDdoorObjects1.length = 0;
gdjs.castleCode.GDdoorObjects2.length = 0;
gdjs.castleCode.GDbookObjects1.length = 0;
gdjs.castleCode.GDbookObjects2.length = 0;
gdjs.castleCode.GDplayerObjects1.length = 0;
gdjs.castleCode.GDplayerObjects2.length = 0;

gdjs.castleCode.eventsList0(runtimeScene);
gdjs.castleCode.GDNewTileMapObjects1.length = 0;
gdjs.castleCode.GDNewTileMapObjects2.length = 0;
gdjs.castleCode.GDwallsObjects1.length = 0;
gdjs.castleCode.GDwallsObjects2.length = 0;
gdjs.castleCode.GDdoorObjects1.length = 0;
gdjs.castleCode.GDdoorObjects2.length = 0;
gdjs.castleCode.GDbookObjects1.length = 0;
gdjs.castleCode.GDbookObjects2.length = 0;
gdjs.castleCode.GDplayerObjects1.length = 0;
gdjs.castleCode.GDplayerObjects2.length = 0;


return;

}

gdjs['castleCode'] = gdjs.castleCode;
