import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import matplotlib.dates as mdates


# 读入爬虫下来数据文件 thousands 自动识别，以，为单位的数字
df = pd.read_csv("艺恩.csv", thousands=',')
df.columns = ["Year", "Rank", "Title", "BoxOffice", "Genre",'Country'] # 设置列
year_group = df.groupby("Year") # 按年分分组


## 画折线趋势图
# 求每年票房的平均值
average_box_office = year_group["BoxOffice"].mean().round(decimals=2)
print(average_box_office)


def get_genre_count(year, genre):
    return df[(df['Year'] == year) & (df['Genre'] == genre)]['Year'].count()
# 分别获取2023年，2015年，2010年的动作片，剧情片，爱情片，科幻片，喜剧片的数量
print(f"2023年动作片数量:{get_genre_count(2023, '动作')}")
print(f"2023年剧情片数量:{get_genre_count(2023, '剧情')}")
print(f"2023年爱情片数量:{get_genre_count(2023, '爱情')}")
print(f"2023年科幻片数量:{get_genre_count(2023, '科幻')}")
print(f"2023年喜剧片数量:{get_genre_count(2023, '喜剧')}")
print(f"2015年动作片数量:{get_genre_count(2015, '动作')}")
print(f"2015年剧情片数量:{get_genre_count(2015, '剧情')}")
print(f"2015年爱情片数量:{get_genre_count(2015, '爱情')}")
print(f"2015年科幻片数量:{get_genre_count(2015, '科幻')}")
print(f"2015年喜剧片数量:{get_genre_count(2015, '喜剧')}")
print(f"2010年动作片数量:{get_genre_count(2010, '动作')}")
print(f"2010年剧情片数量:{get_genre_count(2010, '剧情')}")
print(f"2010年爱情片数量:{get_genre_count(2010, '爱情')}")
print(f"2010年科幻片数量:{get_genre_count(2010, '科幻')}")
print(f"2010年喜剧片数量:{get_genre_count(2010, '喜剧')}")


# 电影类型与票房的关系，按类型分组，计算票房的平均值
df['Genre'] = df['Genre'].str.split('/').str[0]
genre_box_office1 = df.groupby('Genre')['BoxOffice'].mean()
genre_box_office2 = df.groupby('Genre')['BoxOffice'].max()
genre_count = df['Genre'].value_counts()
print(genre_count)
print(genre_box_office1)
print(genre_box_office2)


## 南丁格尔玫瑰图
# ② 这样一个数据将类型的数量列出，可以用丁格尔玫瑰直观的观察他们的占比
# 分割'Genre'列，并取第一个类型作为主要类型
df['Genre'] = df['Genre'].str.split('/').str[0]
genre_group = df.groupby("Genre")
genre_counts = df['Genre'].value_counts()
# 找出<=10的坐标
small_genres = genre_counts[genre_counts <= 10].index
df['Genre'] = df['Genre'].apply(lambda x: '其他' if x in small_genres else x)
new_genre_counts = df['Genre'].value_counts()
print(new_genre_counts)
# 分割'Country'列，并取第一个国家作为主要国家
df['Country'] = df['Country'].str.split('/').str[0]
# 计算每个国家的电影数量
country_counts = df['Country'].value_counts()
# 找出电影数量小于或等于10的国家
small_countries = country_counts[country_counts <= 10].index
# 将这些国家的电影的'Country'设置为'其他'
df['Country'] = df['Country'].apply(lambda x: '其他' if x in small_countries else x)
# 重新计算每个国家的电影数量
new_country_counts = df['Country'].value_counts()
print(new_country_counts)


## 做一个年度top10
df_sorted = df.sort_values(by='BoxOffice', ascending=False)
# 获取票房前10的电影
top_10_movies = df_sorted.head(10)
print(top_10_movies)



