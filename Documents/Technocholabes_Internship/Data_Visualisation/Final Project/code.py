import pandas as pd
pd.plotting.register_matplotlib_converters()
import matplotlib.pyplot as plt
import seaborn as sns

my_filepath = "C:/Users/Yqssine/Documents/Technocholabes_Internship/Dataset/ds_salaries.csv"

my_data = pd.read_csv(my_filepath, index_col="salary", parse_dates=True)


sns.set_style("darkgrid")
 
plt.figure(figsize=(20,8))
sns.lineplot(data=my_data)