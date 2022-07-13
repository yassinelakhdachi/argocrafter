import pandas as pd

reviews = pd.read_csv("C:/Users/Yqssine/Documents/Technocholabes_Internship/Dataset/dataset/winemag-data-130k-v2.csv", index_col=0)

print("Setup complete.")

# Create a Series whose index is the taster_twitter_handle category from the dataset, and whose values count how many reviews each person wrote.
reviews_written = reviews.groupby('taster_twitter_handle').taster_twitter_handle.count()
reviews_written

# Create a Series whose index is wine prices and whose values is the maximum number of points a wine costing that much was given in a review.
# Sort the values by price, ascending (so that 4.0 dollars is at the top and 3300.0 dollars is at the bottom).
best_rating_per_price = reviews.groupby('price')['points'].max().sort_index()
best_rating_per_price

# Create a DataFrame whose index is the variety category from the dataset and whose values are the min and max values thereof.
price_extremes = reviews.groupby('variety').price.agg([min, max])
price_extremes

# Create a variable sorted_varieties containing a copy of the dataframe from the previous question where varieties are sorted in descending order based on minimum price, then on maximum price
reviews = pd.read_csv("C:/Users/Yqssine/Documents/Technocholabes_Internship/Dataset/dataset/winemag-data-130k-v2.csv", index_col=0)

price_extremes = reviews.groupby('variety').price.agg([min, max])

sorted_varieties = price_extremes.sort_values(by=['min', 'max'],ascending= False)
sorted_varieties


# Create a Series whose index is reviewers and whose values is the average review score given out by that reviewer. Hint: you will need the taster_name and points columns.
reviewer_mean_ratings = reviews.groupby('taster_name').points.mean()
reviewer_mean_ratings


# use the describe() method to see a summary of the range of values.
reviewer_mean_ratings.describe()

# Create a Series whose index is a MultiIndexof {country, variety} pairs. For example, a pinot noir produced in the US should map to {"US", "Pinot Noir"}.
# Sort the values in the Series in descending order based on wine count.
country_variety_counts = reviews.groupby(['country', 'variety']).size().sort_values(ascending=False)
country_variety_counts