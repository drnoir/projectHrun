gdjs.death_32screenCode = {};
gdjs.death_32screenCode.localVariables = [];
gdjs.death_32screenCode.GDNewSpriteObjects1= [];
gdjs.death_32screenCode.GDNewSpriteObjects2= [];
gdjs.death_32screenCode.GDNewTextObjects1= [];
gdjs.death_32screenCode.GDNewTextObjects2= [];
gdjs.death_32screenCode.GDRedButtonWithStoneFrameObjects1= [];
gdjs.death_32screenCode.GDRedButtonWithStoneFrameObjects2= [];
gdjs.death_32screenCode.GDSummoning_9595circlesObjects1= [];
gdjs.death_32screenCode.GDSummoning_9595circlesObjects2= [];
gdjs.death_32screenCode.GDplayerObjects1= [];
gdjs.death_32screenCode.GDplayerObjects2= [];
gdjs.death_32screenCode.GDdungeon_9595backgroundObjects1= [];
gdjs.death_32screenCode.GDdungeon_9595backgroundObjects2= [];
gdjs.death_32screenCode.GDPlatformObjects1= [];
gdjs.death_32screenCode.GDPlatformObjects2= [];
gdjs.death_32screenCode.GDborderObjects1= [];
gdjs.death_32screenCode.GDborderObjects2= [];
gdjs.death_32screenCode.GDJumpButtonObjects1= [];
gdjs.death_32screenCode.GDJumpButtonObjects2= [];
gdjs.death_32screenCode.GDJoystickObjects1= [];
gdjs.death_32screenCode.GDJoystickObjects2= [];
gdjs.death_32screenCode.GDfireball_9595joystick_9595Objects1= [];
gdjs.death_32screenCode.GDfireball_9595joystick_9595Objects2= [];
gdjs.death_32screenCode.GDiceblast_9595joystickObjects1= [];
gdjs.death_32screenCode.GDiceblast_9595joystickObjects2= [];


gdjs.death_32screenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithStoneFrame"), gdjs.death_32screenCode.GDRedButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.death_32screenCode.GDRedButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.death_32screenCode.GDRedButtonWithStoneFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.death_32screenCode.GDRedButtonWithStoneFrameObjects1[k] = gdjs.death_32screenCode.GDRedButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.death_32screenCode.GDRedButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main scene", false);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(100);
}}

}


};

gdjs.death_32screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.death_32screenCode.GDNewSpriteObjects1.length = 0;
gdjs.death_32screenCode.GDNewSpriteObjects2.length = 0;
gdjs.death_32screenCode.GDNewTextObjects1.length = 0;
gdjs.death_32screenCode.GDNewTextObjects2.length = 0;
gdjs.death_32screenCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.death_32screenCode.GDRedButtonWithStoneFrameObjects2.length = 0;
gdjs.death_32screenCode.GDSummoning_9595circlesObjects1.length = 0;
gdjs.death_32screenCode.GDSummoning_9595circlesObjects2.length = 0;
gdjs.death_32screenCode.GDplayerObjects1.length = 0;
gdjs.death_32screenCode.GDplayerObjects2.length = 0;
gdjs.death_32screenCode.GDdungeon_9595backgroundObjects1.length = 0;
gdjs.death_32screenCode.GDdungeon_9595backgroundObjects2.length = 0;
gdjs.death_32screenCode.GDPlatformObjects1.length = 0;
gdjs.death_32screenCode.GDPlatformObjects2.length = 0;
gdjs.death_32screenCode.GDborderObjects1.length = 0;
gdjs.death_32screenCode.GDborderObjects2.length = 0;
gdjs.death_32screenCode.GDJumpButtonObjects1.length = 0;
gdjs.death_32screenCode.GDJumpButtonObjects2.length = 0;
gdjs.death_32screenCode.GDJoystickObjects1.length = 0;
gdjs.death_32screenCode.GDJoystickObjects2.length = 0;
gdjs.death_32screenCode.GDfireball_9595joystick_9595Objects1.length = 0;
gdjs.death_32screenCode.GDfireball_9595joystick_9595Objects2.length = 0;
gdjs.death_32screenCode.GDiceblast_9595joystickObjects1.length = 0;
gdjs.death_32screenCode.GDiceblast_9595joystickObjects2.length = 0;

gdjs.death_32screenCode.eventsList0(runtimeScene);
gdjs.death_32screenCode.GDNewSpriteObjects1.length = 0;
gdjs.death_32screenCode.GDNewSpriteObjects2.length = 0;
gdjs.death_32screenCode.GDNewTextObjects1.length = 0;
gdjs.death_32screenCode.GDNewTextObjects2.length = 0;
gdjs.death_32screenCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.death_32screenCode.GDRedButtonWithStoneFrameObjects2.length = 0;
gdjs.death_32screenCode.GDSummoning_9595circlesObjects1.length = 0;
gdjs.death_32screenCode.GDSummoning_9595circlesObjects2.length = 0;
gdjs.death_32screenCode.GDplayerObjects1.length = 0;
gdjs.death_32screenCode.GDplayerObjects2.length = 0;
gdjs.death_32screenCode.GDdungeon_9595backgroundObjects1.length = 0;
gdjs.death_32screenCode.GDdungeon_9595backgroundObjects2.length = 0;
gdjs.death_32screenCode.GDPlatformObjects1.length = 0;
gdjs.death_32screenCode.GDPlatformObjects2.length = 0;
gdjs.death_32screenCode.GDborderObjects1.length = 0;
gdjs.death_32screenCode.GDborderObjects2.length = 0;
gdjs.death_32screenCode.GDJumpButtonObjects1.length = 0;
gdjs.death_32screenCode.GDJumpButtonObjects2.length = 0;
gdjs.death_32screenCode.GDJoystickObjects1.length = 0;
gdjs.death_32screenCode.GDJoystickObjects2.length = 0;
gdjs.death_32screenCode.GDfireball_9595joystick_9595Objects1.length = 0;
gdjs.death_32screenCode.GDfireball_9595joystick_9595Objects2.length = 0;
gdjs.death_32screenCode.GDiceblast_9595joystickObjects1.length = 0;
gdjs.death_32screenCode.GDiceblast_9595joystickObjects2.length = 0;


return;

}

gdjs['death_32screenCode'] = gdjs.death_32screenCode;
