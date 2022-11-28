package com.basics.interfaces;

interface Sqauare{
	void square() ;
	static Integer Sq(Integer x) {return x*x;};
	
}
 
public class Calculate  {
	
	public static void main(String[] args) {
		Sqauare s1 = new SquareOf10();
		s1.square();
		System.out.println(Sqauare.Sq(10));
	}

	
}

class SquareOf10 implements Sqauare {
	@Override
	public void square() {
		System.out.println("Square of the number is : ");
	}

}
