def formingMagicSquare(s):
    pos=[[[4,3,8],[9,5,1],[2,7,6]],
        [[2,9,4],[7,5,3],[6,1,8]],
        [[6,7,2],[1,5,9],[8,3,4]],
        [[8,1,6],[3,5,7],[4,9,2]],
        [[8,3,4],[1,5,9],[6,7,2]],
        [[4,9,2],[3,5,7],[8,1,6]],
        [[2,7,6],[9,5,1],[4,3,8]],
        [[6,1,8],[7,5,3],[2,9,4]]
        ]
    difflist=[]
    for x in pos:
        print("x" ,x)
        diff=0
        for i in range(3):
            for j in range(3):
                diff=diff+abs(s[i][j]-x[i][j])
                print("s i", s[i][j])
                print("x i", x[i][j])
                print("diff", diff)
                # print(diff, s[i][j],x[i][j])
        print(diff)
        difflist.append(diff)
    print(difflist)   
    return min(difflist)

formingMagicSquare( [[2, 9, 8], [4, 2, 7], [5, 6, 7]])