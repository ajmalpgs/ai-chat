class MyClass:
    def __init__(self, attribute1: int, attribute2: int):
        self.attribute1 = attribute1
        self.attribute2 = attribute2

    def my_method(self):
        total = self.attribute1 + self.attribute2
        return f"sum is: {total}"

# Get input and convert to integers
one = int(input("What is first number? "))
two = int(input("What is second number? "))

# Create an object and print the result
my_object = MyClass(one, two)
print(my_object.my_method())