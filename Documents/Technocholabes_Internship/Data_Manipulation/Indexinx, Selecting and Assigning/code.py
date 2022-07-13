import pandas as pd

reviews = pd.read_csv("C:/Users/Yqssine/Documents/Technocholabes_Internship/Dataset/dataset/winemag-data-130k-v2.csv", index_col=0)
pd.set_option("display.max_rows", 5)
reviews.head()

desc = reviews.description
desc

# Select the first value from the description column of reviews, assigning it to variable first_description
first_description = desc[0]
first_description

# Select the first row of data (the first record) from reviews, assigning it to the variable first_row.
first_row = reviews.iloc[0]
first_row

# Select the first 10 values from the description column in reviews, assigning the result to variable first_descriptions.
first_descriptions = reviews.description.iloc[:10]
first_descriptions

# Select the records with index labels 1, 2, 3, 5, and 8, assigning the result to the variable sample_reviews.
sample_reviews = reviews.loc[[1,2,3,5,8]]
sample_reviews

# Create a variable df containing the country, province, region_1, and region_2 columns of the records with the index labels 0, 1, 10, and 100
cols = ['country', 'province', 'region_1', 'region_2']
indices = [0, 1, 10, 100]
df = reviews.loc[indices, cols]
df

# Create a variable df containing the country and variety columns of the first 100 records.
cols = ['country', 'variety']
df = reviews.loc[:99, cols]
df 

# Create a DataFrame italian_wines containing reviews of wines made in Italy
italian_wines= reviews.loc[reviews.country.isin(['Italy'])]

# Create a DataFrame top_oceania_wines containing all reviews with at least 95 points (out of 100) for wines from Australia or New Zealand.
top_oceania_wines = reviews.loc[(reviews.country.isin(['Australia','New Zealand'])) & (reviews.points >= 95)]
top_oceania_wines

