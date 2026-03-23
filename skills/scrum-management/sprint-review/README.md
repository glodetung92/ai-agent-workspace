Bước 1: Chuẩn bị dữ liệu (Dùng prompt-template.md)
Bạn mở file prompt-template.md và điền các thông tin của Sprint mới nhất vào.

Mẹo: Bạn chỉ cần dán bảng Task từ Jira, Excel hoặc ghi chú thô vào mục Task List. Không cần định dạng đẹp, AI sẽ tự lo phần đó.

Bước 2: Kích hoạt Agent (Câu lệnh Master Prompt)
Bạn copy toàn bộ nội dung từ prompt-template.md và gửi cho AI (Gemini, ChatGPT hoặc Cursor) kèm theo câu lệnh sau:

"Sử dụng kỹ năng đã định nghĩa trong SKILL.md và cấu trúc code mẫu trong references/slide-builder.js, hãy đọc dữ liệu Sprint mới nhất dưới đây và tạo cho tôi đoạn code Node.js hoàn chỉnh để gen file PowerPoint."

[Dán nội dung từ prompt-template.md vào đây]

Bước 3: AI xử lý và trả kết quả
AI sẽ thực hiện các việc sau:

Phân tích dữ liệu: Chia các Task vào đúng các Domain và Category (như Dialog, Buyer...).

Gộp nhóm: Áp dụng quy tắc tối đa 3 task mỗi slide để đảm bảo thẩm mỹ.

Gen Code: AI sẽ trả về cho bạn toàn bộ nội dung file slide-builder.js mới, trong đó phần const CONTENT đã được lấp đầy bằng dữ liệu Sprint mới của bạn.

Bước 4: Chạy Code để xuất file .pptx
Sau khi nhận được đoạn code từ AI, bạn làm theo các bước:

Lưu code: Copy đoạn code AI vừa trả về và ghi đè vào file slide-builder.js trên máy bạn (hoặc tạo file mới).

Cài đặt thư viện (nếu chưa có): Mở Terminal tại thư mục đó và chạy lệnh:

Bash
npm install pptxgenjs
Thực thi: Chạy lệnh để gen file:

Bash
node slide-builder.js
Kết quả: Một file có tên dạng sprint_review_9.pptx sẽ xuất hiện ngay trong thư mục của bạn với đúng màu Teal/Navy, đúng layout và badge "✓ 完了" như bạn đã thiết kế!