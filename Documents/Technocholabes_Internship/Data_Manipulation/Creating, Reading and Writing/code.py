import pandas as pd
fruits = pd.DataFrame([[30, 21]], columns=['Apples', 'Bananas'])
fruits

fruit_sales = fruit_sales = pd.DataFrame([[35, 21], [41, 34]], columns=['Apples', 'Bananas'],
                index=['2017 Sales', '2018 Sales'])

fruit_sales

ingredients = pd.Series(['4 cups', '1 cup', '2 large', '1 can'], index=['Flour', 'Milk', 'Eggs', 'Spam'], name='Dinner')
ingredients

reviews = pd.read_csv("C:/Users/Yqssine/Documents/Technocholabes_Internship/Dataset/dataset//winemag-data_first150k.csv", index_col=0)
reviews

animals = pd.DataFrame({'Cows': [12, 20], 'Goats': [22, 19]}, index=['Year 1', 'Year 2'])
animals

animals.to_csv("cows_and_goats.csv")

