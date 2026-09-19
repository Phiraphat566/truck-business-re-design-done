# Integrated Information System for Truck Operation Management
### ระบบสารสนเทศเพื่อการบริหารจัดการธุรกิจรถบรรทุก (AUCC 2026)

เว็บแอปพลิเคชันแบบครบวงจร (Full-Stack 3-Tier Architecture) ที่พัฒนาขึ้นเพื่อเพิ่มประสิทธิภาพในการบริหารงานขนส่งและธุรกิจรถบรรทุก ทดแทนการจดบันทึกเอกสาร ช่วยลดความผิดพลาดและวิเคราะห์ต้นทุน-กำไรได้อย่างแม่นยำ

---

## ฟังก์ชันการทำงานหลัก (Key Features)

-  ภาพรวมระบบ (Real-time Dashboard): สรุปตัวชี้วัดสำคัญ (KPIs) เช่น รายรับรวม, รายจ่ายรวม, จำนวนรถที่พร้อมใช้งาน และจำนวนพนักงาน
-  ระบบบันทึกเวลาเข้า-ออกงาน: บันทึกเวลาทำงานของพนักงาน พร้อมสรุปสถานะการเข้างาน (ตรงเวลา, สาย, ลา) แบบรายวันและรายเดือน
-  การจัดการยานพาหนะและประวัติการใช้งาน: จัดเก็บข้อมูลรถบรรทุก, บันทึกประวัติการบำรุงรักษา, Log ระยะทางการวิ่ง (Distance Log) และ Log การเติมน้ำมัน (Fuel Log)
-  การวิเคราะห์ต้นทุนค่าน้ำมัน: คำนวณอัตราการสิ้นเปลืองน้ำมันเฉลี่ย (Liters/Km) และประเมินต้นทุนค่าน้ำมันอัตโนมัติตามระยะทางจริงในแต่ละเที่ยว
-  ระบบการเงินและบัญชี: บันทึกเอกสารรายรับ (Revenue), จัดการใบแจ้งหนี้ (Invoice) และระบบบริหารจัดการเงินเดือน (Payroll)
-  การเชื่อมต่อ LINE Chatbot (2-Way Communication): สั่งมอบหมายงานลงกลุ่ม LINE พนักงาน และตรวจจับการพิมพ์ตอบกลับ เช่น "รับงาน" เพื่ออัปเดตสถานะในฐานข้อมูลโดยอัตโนมัติ

---

##  เทคโนโลยีและสถาปัตยกรรม (Tech Stack)

- **Architecture:** 3-Tier Architecture (Client / Server / Database)
- **Frontend:** Angular Framework, TypeScript, HTML5, SCSS / CSS3
- **Backend:** Node.js, Express.js
- **Database & ORM:** MySQL, Prisma ORM
- **Third-Party Integration:** LINE Messaging API
- **Tools:** Postman, Docker, Git

---

##  การนำเสนอผลงานวิชาการ (Academic Publication)
งานวิจัยและระบบนี้ได้รับการนำเสนอและเผยแพร่ใน:
* **The 14th Asia Undergraduate Conference on Computing (AUCC 2026)**
* 📄 [อ่านบทความวิจัยฉบับเต็ม (PDF)](https://github.com/user-attachments/files/32413941/AUCC2026_OralThai-Website.for.Managing.Truck.Business.pdf.pdf)
* 🏆 [เกียรติบัตรรางวัล (PDF)](https://github.com/user-attachments/files/32413947/AUCC-Award-Certificate.pdf)
  
---

##  ภาพตัวอย่างระบบ (Screenshots)
Login Page
<img width="1917" height="1078" alt="login" src="https://github.com/user-attachments/assets/1e977502-24a8-4517-a581-acf30e1a5f52" />

ForgotPassword Page
<img width="1917" height="1078" alt="loginpass" src="https://github.com/user-attachments/assets/1d6551b5-096a-4678-8718-1a22c4b87273" />

Dashboard Page
<img width="1912" height="1071" alt="main" src="https://github.com/user-attachments/assets/9a4c12c7-b5be-4215-867e-839db3989fda" />

User Page
<img width="1917" height="1078" alt="user" src="https://github.com/user-attachments/assets/9f13c847-ba51-4227-84d4-b36ee20643a0" />
<img width="1917" height="1078" alt="userstaffedit" src="https://github.com/user-attachments/assets/2e88c0ac-0a70-4795-a589-bfad1dd693c1" />


Check in/out Page
<img width="1917" height="1078" alt="check in  year" src="https://github.com/user-attachments/assets/338502a3-0ce5-459f-bb33-a64b38339fef" />
<img width="1917" height="1078" alt="check in persol" src="https://github.com/user-attachments/assets/a565be51-29d3-4e27-b2cb-62afcedba0ce" />
<img width="1907" height="1078" alt="ตารางเข้าออก" src="https://github.com/user-attachments/assets/4962a740-58d1-423e-b6fa-e6507ae92e4f" />

Empolyee Page
<img width="1917" height="1078" alt="employee" src="https://github.com/user-attachments/assets/7c58e560-223a-4f42-be06-c483b34466de" />
<img width="1917" height="1078" alt="user profile" src="https://github.com/user-attachments/assets/32a85ace-ae25-45fe-8649-0d98136913c6" />
<img width="1917" height="1078" alt="employee ad" src="https://github.com/user-attachments/assets/a9ffe555-bb0e-4a09-9efe-c0daac78858b" />
<img width="1917" height="1078" alt="employee check in" src="https://github.com/user-attachments/assets/b4860816-dfe4-4e67-922e-0a0cef943c3c" />
<img width="1917" height="1078" alt="employee ad" src="https://github.com/user-attachments/assets/e539dfb0-8456-49dc-9e8e-6e86a7d4b7c7" />
<img width="1917" height="1078" alt="employee history" src="https://github.com/user-attachments/assets/e1378242-c998-4b87-b92e-d66ef25be017" />

Expenses Page
<img width="1917" height="1078" alt="ร่ายจ่าย" src="https://github.com/user-attachments/assets/39e9fadd-f737-4bcf-9cd7-74cd36d841ee" />
<img width="1917" height="1078" alt="ร่ายจ่าย2" src="https://github.com/user-attachments/assets/476e120a-e5b8-45d0-987f-cd5d122da7aa" />
<img width="1917" height="1078" alt="ใบแจ้งหนี้" src="https://github.com/user-attachments/assets/5c8dd25e-f504-48b8-b63c-8728d3ba5d26" />
<img width="1917" height="1078" alt="ใบแจ้งหนี" src="https://github.com/user-attachments/assets/42b6c3b8-ae53-4670-80cd-b772187a190f" />
<img width="1917" height="1077" alt="เงินเดือน" src="https://github.com/user-attachments/assets/2f1a2feb-73fd-437f-a3dd-43718459f4ca" />

Income Page
<img width="1916" height="1078" alt="รายรับ" src="https://github.com/user-attachments/assets/b0ec7f68-d014-44ee-a493-26d5ae935b12" />
<img width="1917" height="1078" alt="รายรับเดือน" src="https://github.com/user-attachments/assets/5956d957-3af9-4418-bff4-5c2ae7d4e2fa" />

Truck Page
<img width="1917" height="1078" alt="จัดการรถบรรทุก" src="https://github.com/user-attachments/assets/200d54cb-5ed5-4a15-a65a-df4d1d30e8c4" />
<img width="1917" height="1078" alt="รถบรรถุก" src="https://github.com/user-attachments/assets/48121458-6d4d-459a-9787-4d9ad7bd801f" />
<img width="1917" height="1078" alt="รายละเอียดรถ" src="https://github.com/user-attachments/assets/43ef21e3-1209-4c8b-8e0d-eebaa63c6e36" />
<img width="1917" height="1076" alt="ประวัติซ่อม" src="https://github.com/user-attachments/assets/07669285-7f8d-41bd-9d21-63839e31b1d1" />
<img width="1917" height="1068" alt="ระยะทาง" src="https://github.com/user-attachments/assets/739cb51e-4605-4ebd-bcfe-7051efe17180" />
<img width="1917" height="1078" alt="บันึกน้ำมัน" src="https://github.com/user-attachments/assets/87847797-7b46-41d5-a7cf-21010904eb0b" />

Line Page
<img width="1917" height="1078" alt="line" src="https://github.com/user-attachments/assets/75701069-824f-4dba-804a-0c65ad1d5d70" />
<img width="1917" height="1078" alt="line2" src="https://github.com/user-attachments/assets/59e05e59-0086-479c-b216-c6b9a3a1ad67" />

---



