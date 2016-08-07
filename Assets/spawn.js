public var asteroid : GameObject;
public var spawnTime : float = 2;

function Start() {
    InvokeRepeating("addAsteroid", 1, spawnTime);
}

function addAsteroid() {
    var rd : Renderer = GetComponent("Renderer");
    var x1 = transform.position.x - rd.bounds.size.x/2;
    var x2 = transform.position.x + rd.bounds.size.x/2;
    var spawnPoint = Vector2(Random.Range(x1, x2), transform.position.y);
    Instantiate(asteroid, spawnPoint, Quaternion.identity);
} 