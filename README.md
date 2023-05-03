# 咖啡廳預約
###### 建立日期:1120309

## UI畫面設計-咖啡廳預約
![App_預約咖啡介面](https://user-images.githubusercontent.com/33750244/233001861-2616651e-07ad-4053-980f-a80a22d67e18.png)

#### 說明:輸入09開頭的手機號碼，按下「確認」鍵，即會跳出成功預約的視窗；如輸入非電話號碼的文字，則會跳出「請輸入您的電話號碼」的視窗。

---
## 網頁版實機畫面
### 初始畫面
![image](https://user-images.githubusercontent.com/33750244/233247002-e9a34ff9-8ab9-418d-a894-0245ca7456e4.png)

### 預約成功畫面
![image](https://user-images.githubusercontent.com/33750244/233247315-4f60a5ad-da2e-4ac8-a7e3-a479fb554e07.png)

### 輸入失敗畫面
![image](https://user-images.githubusercontent.com/33750244/233247439-15f3d9ef-0f6e-4db4-a0f6-1570dd64b4c5.png)


---
---
## 程式碼備註
#### 判斷是否符合手機格式
inputValue 設定為輸入框，設定phone要台灣手機格式，09開頭後面固定+8碼，跑if/else迴圈，不符合就跳出迴圈。

#### 匯入字型
useEffect() : Hook只在首次渲染時執行一次，避免重複加載，用來定義字體。
useState():會在每次渲染時都執行，導致每次執行都會重複加載字體。
因此使用 useEffect() 來加載

loadFonts 函數:用來載入自定義字體。該函數使用了。
async/await :async function用來定義一個非同步函式，讓這個函式本體是屬於非同步，但內部“以同步的方式運行非同步”的程式碼。 await 則是可以暫停非同步函式的運行，這裡用來確認字體有成功載入，再執行下一步。



###### 最後更新日期:1120420
