mony = 1000000
import random

while True:
    bet = 1
    randomNumber = random.randint(0,1)
    count = 0

    if randomNumber == 1:
        mony = mony - bet
        bet = bet * 2


    if randomNumber == 0:
        mony += 1
        bet = 1

    count += 1
    print(mony)
    if mony == 1100000:
        print("Du van 100 tusen")
        print(count)
        break

    if mony == 0:
        print("Du förlora allt")
        print(count)
        break

