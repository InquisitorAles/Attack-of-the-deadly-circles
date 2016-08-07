using UnityEngine;
using System.Collections;

public class movement : MonoBehaviour
{
    public Rigidbody2D rb2d;
    public Rigidbody2D bullet;
    public float playerSpeed;
    public int directionInput;
    public bool facingRight = true;

    void Start()
    {
        rb2d = rb2d.GetComponent<Rigidbody2D>();
    }

    void Update()
    {
        if ((directionInput < 0) && (facingRight))
        {
            Flip();
        }
        if ((directionInput > 0) && (!facingRight))
        {
            Flip();
        }
    }

    void FixedUpdate()
    {
        rb2d.velocity = new Vector2(playerSpeed * directionInput, rb2d.velocity.y);
    }

    public void Move(int InputAxis)
    {
        directionInput = InputAxis;
    }

    public void Shoot()
    {
        Instantiate(bullet, transform.position, Quaternion.identity);
    }

    void Flip()
    {
        facingRight = !facingRight;
        Vector3 theScale = transform.localScale;
        theScale.x *= -1;
        transform.localScale = theScale;
    }

}
