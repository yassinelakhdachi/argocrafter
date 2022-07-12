import pandas as pd
pd.plotting.register_matplotlib_converters()
import matplotlib.pyplot as plt
import seaborn as sns
print("Setup Complete")


spotify_filepath = "../input/spotify.csv"

spotify_data = pd.read_csv(spotify_filepath, index_col="Date", parse_dates=True)


sns.set_style("darkgrid")
 
plt.figure(figsize=(12,6))
sns.lineplot(data=spotify_data)