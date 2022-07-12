import pandas as pd
pd.plotting.register_matplotlib_converters()
import matplotlib.pyplot as plt
import seaborn as sns

# Path of the file to read
museum_filepath = "C:/Users/Yqssine/Documents/Technocholabes_Internship/Dataset/museum_visitors.csv"

# Fill in the line below to read the file into a variable museum_data
museum_data =  pd.read_csv(museum_filepath, index_col="Date", parse_dates=True)

# Print the last five rows of the data 
museum_data.tail() 

# Line chart showing the number of visitors to each museum over time
plt.figure(figsize=(14,8))
plt.title("Number of Visitors")
sns.lineplot(data=museum_data['Avila Adobe'], label="Avila Adobe")
sns.lineplot(data=museum_data['Firehouse Museum'], label="Firehouse Museum")
sns.lineplot(data=museum_data['Chinese American Museum'], label="Chinese American Museum")
sns.lineplot(data=museum_data['America Tropical Interpretive Center'], label="America Tropical Interpretive Center")
plt.xlabel("Date")

# Line plot showing the number of visitors to Avila Adobe over time
plt.figure(figsize=(14,8))
plt.title("Number of Visitors of Avila Adobe")
sns.lineplot(data=museum_data['Avila Adobe'], label="Avila Adobe")
plt.xlabel("Date")


