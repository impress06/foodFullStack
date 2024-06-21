# Proje Adı: MERN Stack Food Order App

![Proje Demo](./foodOrder.gif)


## Live Site

The project is deployed at: [www.sepetteyemek.com](http://www.sepetteyemek.com)

## Özellikler

### Türkçe
- **Proje**: MERN yemek sipariş sistemi. Vite Kullanılmıştır.
- **Kullanıcı Kayıt**: Üyelik oluşturunca otomatik yönlendirme ve üye olunan maile hesap gönderme.
- **Sipariş Oluşturma**: Sipariş Oluşturulunca mail gider admin panalinden siparis durumunu hazırlanıyor yola çıktı iptal etti diye değiştiribilirsiniz ve anında kullanıcıya iletilir..
- **Ödeme Sistemleri**:Sistem IYIZICO üzerinden kredi kartı ile sipariş yapabilir..
- **Şifre Sıfırlama**: "Şifremi unuttum" tıklayınca kod gönderme ve bu kodla şifre değiştirme.
- **Stil**: Pure CSS, Material UI ve TailwindCSS kullanılmıştır.
- **Giriş Yaptıktan Sonra**: Üç ayrı bilgi tutulur:
  - Cookie (Eğer "beni hatırla" işaretlenirse, 3 gün sınırlı)
  - SimpleToken
  - JWT token (şu an pasif, istenirse aktif hale getirilebilir)
- **Global State**: Gelen token ContexAPI de saklanır
- **İstekler**: Axios instance kullanılmış, requestler ve headerlar bir yerde toplanmıştır.
- **Backend**: Node.js ve Express.js kullanılmıştır.
- **Loglama**: Site, morgan modülü ile log tutmaktadır.
- **Dosya Yükleme**: Multer modülü ile dosya yüklenmektedir.
- **Swagger**: Swagger dokümantasyonu `sepetteyemek.com/documents/swagger` adresindedir.
- **Şifre Kontrolü**: Middleware düzeyinde yapılmaktadır.
- **Permissionlar**: Şu an aktif değildir ama yazılmıştır (disabled).
- **Pagination**: Gerçek zamanlıdır, tüm veriler frontende yüklenip frontendde yapılmamaktadır, API'den parçalı çekilmektedir.
- **Responsive**: Tamamen responsivedir.
- **Uyarılar**: Toast kullanılmıştır.
- **Dashboard**: Admin ve kullanıcı dashboardları ayrı ayrı yazılmıştır.
- **ERD Diyagramı**: Proje içine eklenmiştir.
- **NotFound Sayfası**: Eklenmiştir.

### English

- **Project**: MERN food ordering system. Vite is used.
- **User Registration**: Automatic redirection after account creation and account details sent to the registered email.
- **Order Creation**: An email is sent upon order creation. The order status can be updated from the admin panel to "preparing," "shipped," or "canceled," and this is instantly communicated to the user.
- **Payment Systems**: Payments can be made via credit card through IYIZICO.
- **Password Reset**: Click "Forgot Password" to receive a code, which can be used to reset the password.
- **Styling**: Pure CSS, Material UI, and TailwindCSS are used.
- **After Login**: Three types of information are stored:
  - Cookie (limited to 3 days if "remember me" is checked)
  - SimpleToken
  - JWT token (currently inactive but can be activated if needed)
- **Global State**: The received token is stored in ContextAPI.
- **Requests**: Axios instance is used, and requests and headers are centralized.
- **Backend**: Node.js and Express.js are used.
- **Logging**: The site logs with the Morgan module.
- **File Upload**: Files are uploaded with the Multer module.
- **Swagger**: Swagger documentation is available at `sepetteyemek.com/documents/swagger`.
- **Password Control**: Done at the middleware level.
- **Permissions**: Currently inactive but implemented (disabled).
- **Pagination**: Real-time, data is not fully loaded on the frontend but fetched in parts from the API.
- **Responsive**: Fully responsive.
- **Alerts**: Toast notifications are used.
- **Dashboard**: Separate dashboards for admin and user.
- **ERD Diagram**: Included in the project.
- **NotFound Page**: Added.





## Kurulum / Installation

### Türkçe
1. Depoyu klonlayın:
    ```bash
    git clone https://github.com/kullanici/proje.git
    ```
2. Gerekli paketleri yükleyin:
    ```bash
    cd proje
    npm install
    ```
3. .env dosyasını oluşturun ve gerekli ortam değişkenlerini ekleyin.

4. Uygulamayı başlatın:
    ```bash
    npm run dev
    ```

### English
1. Clone the repository:
    ```bash
    git clone https://github.com/username/project.git
    ```
2. Install the necessary packages:
    ```bash
    cd project
    npm install
    ```
3. Create a .env file and add the required environment variables.

4. Start the application:
    ```bash
    npm run dev
    ```

## Kullanılan Teknolojiler / Technologies Used

- **Frontend**: React, Pure CSS, Material UI, TailwindCSS,Styled Component ,
- **Backend**: Node.js, Express.js, Multer, Morgan
- **State Management**: ContextAPI , LocalStorage
- **HTTP Requests**: Axios
- **Documentation**: Swagger
- **Notifications**: Toast
  

## Katkıda Bulunma / Contributing

### Türkçe
Katkıda bulunmak için lütfen bir pull request gönderin veya bir issue açın.

### English
Please send a pull request or open an issue to contribute.

## Lisans / License

Bu proje MIT lisansı ile lisanslanmıştır. / This project is licensed under the MIT License.
