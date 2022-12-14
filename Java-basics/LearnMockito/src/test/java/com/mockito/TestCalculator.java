package com.mockito;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;
import static org.mockito.Mockito.*;

public class TestCalculator{
	Calculator c = null;
	
	CalculatorService service = Mockito.mock(CalculatorService.class);
	
	@Before
	public void setUp() {
		c = new Calculator(service);
	}
	
	@Test
	public void testPerform() 
	{
		when(service.add(110, 40)).thenReturn(150);
		assertEquals(150, c.perform(110, 40));
	}

}
