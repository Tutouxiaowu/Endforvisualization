import csv
import time
from selenium.webdriver import Edge
from selenium.webdriver.support.select import Select#select列表
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys#键盘
from selenium.webdriver.edge.options import Options#无头
import pandas as pd
opt = Options()
# 设置无头
opt.add_argument("--headless")
opt.add_argument("--disbale-gpu")
url ='https://www.endata.com.cn/BoxOffice/BO/Year/index.html'
web = Edge(options=opt)
web.get(url)
#定位到select 使用xpath
sel_el = web.find_element(By.XPATH,'//*[@id="OptionDate"]')
#对元素进行封装，成下拉菜单
sel = Select(sel_el)
year = 2024
for i in range(len(sel.options)):
   sel.select_by_index(i)
   time.sleep(1)
   print(f"年度{year}")
   list_content = web.find_elements(By.XPATH,'//*[@id="TableList"]/table/tbody/tr')
   for list in list_content:
       type = list.find_element(By.XPATH,'./td[3]').text
       td = list.find_element(By.XPATH,'./td[1]').text          # 排名
       m_name = list.find_element(By.XPATH, './td[2]/a/p').text  # 名字  //*[@id="TableList"]/table/tbody/tr[1]/td[2]/a/p
       m_piaofang = list.find_element(By.XPATH, './td[4]').text  # 票房  //*[@id="TableList"]/table/tbody/tr[1]/td[4]
       m_country = list.find_element(By.XPATH, './td[7]').text   # 地区
       with open('艺恩.csv','a+',encoding='utf-8',newline='')as f:
           writer = csv.DictWriter(f,fieldnames=['年份','年度排名','电影名','票房','类型','国家及地区'])
           writer.writerow({'年份':year,'年度排名':td,'电影名':m_name,'票房':m_piaofang,'类型':type,'国家及地区':m_country})
       # 用 df.to_csv
       # df = pd.DataFrame({'年份':year,'排名': td, '电影名字':m_name, '票房': m_piaofang},index=True)
       # df.to_csv('艺恩.csv','a')
       print(f"排名：{td}/电影名：{m_name}/票房{m_piaofang}")
   year = year-1