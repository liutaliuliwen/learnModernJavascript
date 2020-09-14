'''
Write a higher-order function composer that returns two functions, 
func and func_adder. func is a one-argument function that applies 
all of the functions that have been composed so far to it.

The functions are applied with the most recent function being 
applied first (see doctests and examples). func_adder is used to 
add more functions to our composition, and when called on another 
function g, func_adder should return a new func, and a new 
func_adder.

If no parameters are passed into composer, the func returned is 
the identity function.
'''
def composer(func=lambda x: x):
    """
    Returns two functions -
    one holding the composed function so far, and another
    that can create further composed problems.
    >>> add_one = lambda x: x + 1
    >>> mul_two = lambda x: x * 2
    >>> f, func_adder = composer()
    >>> f1, func_adder = func_adder(add_one)
    >>> f1(3)
    4
    >>> f2, func_adder = func_adder(mul_two)
    >>> f2(3) # should be 1 + (2*3) = 7
    7
    >>> f3, func_adder = func_adder(add_one)
    >>> f3(3) # should be 1 + (2 * (3 + 1)) = 9
    9e
    """
    def func_adder(g):
        # nonlocal func       
        f = lambda x: func(g(x))
        return composer(f)


    return func, func_adder