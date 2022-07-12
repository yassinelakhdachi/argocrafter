import pandas as pd
pd.plotting.register_matplotlib_converters()
import matplotlib.pyplot as plt
import seaborn as sns
print("Setup Complete")


# Path of the files to read
cancer_filepath = "C:/Users/Yqssine/Documents/Technocholabes_Internship/Dataset/cancer.csv"

# read the file into a variable cancer_data
cancer_data = pd.read_csv(cancer_filepath, index_col="Id")

# Histograms for benign and maligant tumors
sns.histplot(data=cancer_data, x='Area (mean)', hue='Diagnosis')

# KDE plots for benign and malignant tumors
sns.kdeplot(data=cancer_data, x='Radius (worst)', hue='Diagnosis', shade=True)

