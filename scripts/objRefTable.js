const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Mouse,
		C3.Plugins.Browser,
		C3.Plugins.Audio,
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Behaviors.Bullet,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.Browser.Acts.Close,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.CompareVar
	];
};
self.C3_JsPropNameTable = [
	{Mouse: 0},
	{Browser: 0},
	{Audio: 0},
	{TiledBackground2: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{TiledBackground: 0},
	{Text: 0},
	{Bullet: 0},
	{Sprite3: 0},
	{TiledBackground3: 0},
	{Sprite4: 0},
	{TiledBackground4: 0},
	{Sprite5: 0},
	{Text2: 0},
	{SKOR: 0}
];

self.InstanceType = {
	Mouse: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Text: class extends self.ITextInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	TiledBackground4: class extends self.ITiledBackgroundInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Text2: class extends self.ITextInstance {}
}