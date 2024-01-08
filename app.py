from flask import Flask,render_template
app = Flask(__name__)


# @ 糖果修饰器将app.route映射到route上——通过用户访问的路径匹配函数（hello world）
@app.route('/')  # 此时即是根路径
def hello_world():  # put application's code here
    return render_template('index.html')

# run启动web服务器
if __name__ == '__main__':
    app.run()
