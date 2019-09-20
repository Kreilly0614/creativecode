import random
from textblob import TextBlob

with open('odyssey.txt', 'r') as file:
    text = file.read()

blob = TextBlob(text)

adjectives = ["ingenious", "famous", "safe", "sheer", "large", "other", "up", "Many", "many", "own", "sheer", "Sun-god", "large", "own", "other"]
nouns = ["hecatomb", "O", "Muse", "hero", "town", "Troy", "cities", "nations", "manners", "customs", "sea", "life", "home", "men", "cattle", "folly", "Hyperion", "god", "home", "daughter","Jove", "death", "battle", "shipwreck", "things", "source", "home", "longing", "wife", "country"]
verbs = ["tell", "travelled", "had", "sacked", "did", "visit", "were", "was", "acquainted", "suffered", "trying", "save", "bring", "do", "might", "could", "save", "perished", "eating", "prevented", "ceasing", "enjoying", "been", "revenge", "grew", "went"]

for word,pos in blob.tags:
    # print(word,pos)
    if (pos == 'JJ'):
        adjectives.append(word)
    if (pos == 'NN'):
        nouns.append(word)
    if (pos == 'VB'):
        verbs.append(word)

for i in range(8):
    a1 = random.choice(adjectives)
    a2 = random.choice(adjectives)
    n1 = random.choice(nouns)
    n2 = random.choice(nouns)
    n3 = random.choice(nouns)
    vb = random.choice(verbs)

print(n1 + " " + a1 + " " +  vb  + " " + a2  + " " + n3)
