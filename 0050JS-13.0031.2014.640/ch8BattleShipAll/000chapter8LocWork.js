// RandomShip1
async function BattleShipL() {
	const SetShip = await Parse.Cloud.run('SetBattleShipAllS');

	const GetShip = await Parse.Cloud.run('GetBattleShipAllS');

}
BattleShipL();