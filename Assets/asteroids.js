public var speed : int = -5;
public var gameoverscreen : GameObject;

function Start () {
    var r2d : Rigidbody2D = GetComponent("Rigidbody2D");
    r2d.velocity.y = speed;

}

function OnBecameInvisible() {
    Destroy(gameObject);
} 

function OnTriggerEnter2D(obj : Collider2D) {
    var name = obj.gameObject.name;
    if (name == "bullet(Clone)") {
        Destroy(gameObject);
        Destroy(obj.gameObject);    
    }
    if (name == "spaceship") {
        Destroy(gameObject);
        var spawnPoint = Vector3(1,1);
        Instantiate(gameoverscreen, spawnPoint, Quaternion.identity);
    }
} 