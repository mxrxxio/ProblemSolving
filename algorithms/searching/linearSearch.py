def linear_search(arr, n):
    i = 0
    while i < len(arr):
        if arr[i] == n:
            return i
        i += 1
    
    return -1

print(linear_search([1, 2, 3, 4, 0, -23, 234, 45], -23))