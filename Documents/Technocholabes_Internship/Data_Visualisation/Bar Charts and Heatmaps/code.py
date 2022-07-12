import pandas as pd
pd.plotting.register_matplotlib_converters()
import matplotlib.pyplot as plt
import seaborn as sns

# Path of the file to read
ign_filepath = "C:/Users/Yqssine/Documents/Technocholabes_Internship/Dataset/ign_scores.csv"

# Fill in the line below to read the file into a variable ign_data
ign_data = pd.read_csv(ign_filepath, index_col="Platform")

# Bar chart showing average score for racing games by platform
plt.figure(figsize=(20,10))

# Add title
plt.title("Average score for racing games")

# Bar chart showing average arrival delay for Spirit Airlines flights by month
sns.barplot(x=ign_data.index, y=ign_data['Racing'])

# Add label for vertical axis
plt.ylabel("Scores")


# Heatmap showing average game score by platform and genre
# Set the width and height of the figure
plt.figure(figsize=(20,10))

# Add title
plt.title("Average Score by genre and platform")

# Heatmap showing average arrival delay for each airline by month
sns.heatmap(data=ign_data, annot=True)

# Add label for horizontal axis
plt.xlabel("Games")