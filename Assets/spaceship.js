public var bullet : GameObject;
private static var created = false;

function OnTriggerEnter2D(obj : Collider2D) {
    var name = obj.gameObject.name;
    if (name == "asteroid(Clone)") {
        Destroy(gameObject);
        Destroy(obj.gameObject);
    }
    if (name == "teleport_left") {
        transform.position = Vector3(7,-3,0);  
    }
    if (name == "teleport_right") {
        transform.position = Vector3(-5.5,-3,0);  
    }
} 