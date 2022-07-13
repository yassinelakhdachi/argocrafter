import pandas as pd
pd.set_option("display.max_rows", 5)
reviews = pd.read_csv("C:/Users/Yqssine/Documents/Technocholabes_Internship/Dataset/dataset/winemag-data-130k-v2.csv", index_col=0)
reviews.head()

# The median of the points column in the reviews DataFrame
median_points = reviews.points.median()
median_points

# countries represented in the datase (without duplication)
countries = reviews.country.unique()
countries

# Create a Series reviews_per_country mapping countries to the count of reviews of wines from that country
reviews_per_country = reviews.country.value_counts()
reviews_per_country

# Create variable centered_price containing a version of the price column with the mean price subtracted.
ed_price = reviews.price - reviews.price.mean()
ed_price

# Create a variable bargain_wine with the title of the wine with the highest points-to-price ratio in the dataset.
bargain_idx = (reviews.points / reviews.price).idxmax()
bargain_wine = reviews.loc[bargain_idx, 'title']
bargain_wine

#Create a Series descriptor_counts counting how many times each of these two words appears in the description column in the dataset
n_tropical = reviews.description.map(lambda desc: "tropical" in desc).sum()
n_fruity = reviews.description.map(lambda desc: "fruity" in desc).sum()
descriptor_counts = pd.Series([n_tropical, n_fruity], index=['tropical', 'fruity'])
descriptor_counts

# Create a series star_ratings with the number of stars corresponding to each review in the dataset.
def stars(row):
    if row.country == 'Canada':
        return 3
    elif row.points >= 95:
        return 3
    elif row.points >= 85:
        return 2
    else:
        return 1

star_ratings = reviews.apply(stars, axis='columns')