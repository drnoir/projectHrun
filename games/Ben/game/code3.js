gdjs.templeCode = {};
gdjs.templeCode.localVariables = [];
gdjs.templeCode.GDTopDownDungeon16x16Objects1= [];
gdjs.templeCode.GDTopDownDungeon16x16Objects2= [];
gdjs.templeCode.GDTopDownDungeon16x17Objects1= [];
gdjs.templeCode.GDTopDownDungeon16x17Objects2= [];
gdjs.templeCode.GDTopDownDungeon16x18Objects1= [];
gdjs.templeCode.GDTopDownDungeon16x18Objects2= [];
gdjs.templeCode.GDConjurer1Objects1= [];
gdjs.templeCode.GDConjurer1Objects2= [];
gdjs.templeCode.GDgateObjects1= [];
gdjs.templeCode.GDgateObjects2= [];
gdjs.templeCode.GDsheepObjects1= [];
gdjs.templeCode.GDsheepObjects2= [];
gdjs.templeCode.GDplayerObjects1= [];
gdjs.templeCode.GDplayerObjects2= [];


gdjs.templeCode.mapOfGDgdjs_9546templeCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.templeCode.GDplayerObjects1});
gdjs.templeCode.mapOfGDgdjs_9546templeCode_9546GDgateObjects1Objects = Hashtable.newFrom({"gate": gdjs.templeCode.GDgateObjects1});
gdjs.templeCode.mapOfGDgdjs_9546templeCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.templeCode.GDplayerObjects1});
gdjs.templeCode.mapOfGDgdjs_9546templeCode_9546GDsheepObjects1Objects = Hashtable.newFrom({"sheep": gdjs.templeCode.GDsheepObjects1});
gdjs.templeCode.mapOfGDgdjs_9546templeCode_9546GDsheepObjects1Objects = Hashtable.newFrom({"sheep": gdjs.templeCode.GDsheepObjects1});
gdjs.templeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.templeCode.GDplayerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber((( gdjs.templeCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.templeCode.GDplayerObjects1[0].getPointX("")));
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber((( gdjs.templeCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.templeCode.GDplayerObjects1[0].getPointY("")));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.templeCode.GDplayerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}{for(var i = 0, len = gdjs.templeCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.templeCode.GDplayerObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gate"), gdjs.templeCode.GDgateObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.templeCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.templeCode.mapOfGDgdjs_9546templeCode_9546GDplayerObjects1Objects, gdjs.templeCode.mapOfGDgdjs_9546templeCode_9546GDgateObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.templeCode.GDplayerObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "hub world", false);
}{for(var i = 0, len = gdjs.templeCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.templeCode.GDplayerObjects1[i].returnVariable(gdjs.templeCode.GDplayerObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.templeCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("sheep"), gdjs.templeCode.GDsheepObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.templeCode.mapOfGDgdjs_9546templeCode_9546GDplayerObjects1Objects, gdjs.templeCode.mapOfGDgdjs_9546templeCode_9546GDsheepObjects1Objects, 300, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.templeCode.mapOfGDgdjs_9546templeCode_9546GDsheepObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.templeCode.GDsheepObjects1 */
{for(var i = 0, len = gdjs.templeCode.GDsheepObjects1.length ;i < len;++i) {
    gdjs.templeCode.GDsheepObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}}

}


};

gdjs.templeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.templeCode.GDTopDownDungeon16x16Objects1.length = 0;
gdjs.templeCode.GDTopDownDungeon16x16Objects2.length = 0;
gdjs.templeCode.GDTopDownDungeon16x17Objects1.length = 0;
gdjs.templeCode.GDTopDownDungeon16x17Objects2.length = 0;
gdjs.templeCode.GDTopDownDungeon16x18Objects1.length = 0;
gdjs.templeCode.GDTopDownDungeon16x18Objects2.length = 0;
gdjs.templeCode.GDConjurer1Objects1.length = 0;
gdjs.templeCode.GDConjurer1Objects2.length = 0;
gdjs.templeCode.GDgateObjects1.length = 0;
gdjs.templeCode.GDgateObjects2.length = 0;
gdjs.templeCode.GDsheepObjects1.length = 0;
gdjs.templeCode.GDsheepObjects2.length = 0;
gdjs.templeCode.GDplayerObjects1.length = 0;
gdjs.templeCode.GDplayerObjects2.length = 0;

gdjs.templeCode.eventsList0(runtimeScene);
gdjs.templeCode.GDTopDownDungeon16x16Objects1.length = 0;
gdjs.templeCode.GDTopDownDungeon16x16Objects2.length = 0;
gdjs.templeCode.GDTopDownDungeon16x17Objects1.length = 0;
gdjs.templeCode.GDTopDownDungeon16x17Objects2.length = 0;
gdjs.templeCode.GDTopDownDungeon16x18Objects1.length = 0;
gdjs.templeCode.GDTopDownDungeon16x18Objects2.length = 0;
gdjs.templeCode.GDConjurer1Objects1.length = 0;
gdjs.templeCode.GDConjurer1Objects2.length = 0;
gdjs.templeCode.GDgateObjects1.length = 0;
gdjs.templeCode.GDgateObjects2.length = 0;
gdjs.templeCode.GDsheepObjects1.length = 0;
gdjs.templeCode.GDsheepObjects2.length = 0;
gdjs.templeCode.GDplayerObjects1.length = 0;
gdjs.templeCode.GDplayerObjects2.length = 0;


return;

}

gdjs['templeCode'] = gdjs.templeCode;
