def calculate_score(M, A, F):
    first = (0.14 * M) + (0.56 * A) + (0.5 * F)
    second = (0.1 * M) + (0.4 * A) + (0.5 * F)
    third = (0.3 * M) + (0.4 * A) + (0.3 * F)
    return max(first, second, third)

print(calculate_score(40, 79, 30))