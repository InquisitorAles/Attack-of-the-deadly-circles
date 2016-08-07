var paused : int;
private var button1clicked = false;
private var button2clicked = false;
public var spaceship : GameObject;
public var Menu : Texture;
public var Paused : Texture;
public var button1 : Texture;
public var button2 : Texture;
public var button3 : Texture;

function OnGUI () {
    if (GUI.Button (Rect (10,10,200,200), Menu)) {
        button1clicked = !button1clicked;
        if(paused==0){
            Time.timeScale = 0;
            paused=1;
        } else {
            Time.timeScale = 1;
            paused= 0;
        }
    }
    if (button1clicked) {
        GUI.Box (Rect (Screen.width/2 - 300,Screen.height/2 - 200,500,400), Paused);
    }
    if (button1clicked) {
        if (GUI.Button (Rect (Screen.width/2 - 220,Screen.height/2 - 100,350,70), button1)) {
            Application.LoadLevel ("2");
        }
    }
    if (button1clicked) {
        if (GUI.Button (Rect (Screen.width/2 - 220,Screen.height/2,350,70), button2)) {
            Time.timeScale = 1;
            Application.LoadLevel (0);
        }
    }
    if (button1clicked) {
        if (GUI.Button (Rect (Screen.width/2 - 220,Screen.height/2 + 100,350,70), button3)) {
            Application.Quit(); 
        }
    }
}