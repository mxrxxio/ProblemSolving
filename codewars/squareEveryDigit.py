def square_digits(num):
    result = ''
    digits = [int(x) for x in str(num)]
    for number in range(len(digits)):
        result = result + str(digits[number]**2)
          
    return int(result)


def square_digits(num):
    ret = ""
    for x in str(num):
        ret += str(int(x)**2)
    return int(ret)