export const json = {
  logoFit: "none",
  completedHtml:
    '<div style="\n    max-width: 750px;\n    margin: 0 auto;\n    padding: 48px 40px;\n    background: #FFFFFF;\n    border: 1px solid #E5E7EB;\n    border-radius: 20px;\n    text-align: center;\n    box-shadow: 0 8px 24px rgba(0,0,0,0.06);\n">\n\n    <div style="\n        width: 90px;\n        height: 90px;\n        margin: 0 auto 24px;\n        border-radius: 50%;\n        background: #ECFDF5;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 42px;\n        color: #16A34A;\n        font-weight: bold;\n    ">\n        ✓\n    </div>\n\n    <h1 style="\n        color: #1F2937;\n        font-size: 32px;\n        font-weight: 700;\n        margin-bottom: 20px;\n    ">\n        Terima Kasih atas Partisipasi Anda\n    </h1>\n\n    <p style="\n        color: #4B5563;\n        font-size: 17px;\n        line-height: 1.8;\n        margin-bottom: 24px;\n    ">\n        Survei telah berhasil diselesaikan.\n        Kami sangat menghargai waktu, perhatian, serta masukan yang telah Anda berikan.\n    </p>\n\n    <p style="\n        color: #4B5563;\n        font-size: 17px;\n        line-height: 1.8;\n        margin-bottom: 0;\n    ">\n        Setiap tanggapan yang Anda sampaikan akan menjadi masukan yang berharga dalam memahami kebutuhan pelanggan dan mendukung upaya peningkatan kualitas produk serta layanan kami di masa mendatang.\n    </p>\n\n    <div style="\n        margin-top: 36px;\n        padding-top: 24px;\n        border-top: 1px solid #E5E7EB;\n        color: #6B7280;\n        font-size: 15px;\n    ">\n        <strong>PT Suparma Tbk</strong><br>\n        Customer Insight Survey\n    </div>\n\n</div>',
  pages: [
    {
      name: "First Page",
      elements: [
        {
          type: "image",
          name: "Welcome Page",
          imageLink:
            "https://api.surveyjs.io/private/Surveys/files?name=463a7d94-b84c-4e61-9c5a-1c82942b8121",
          imageFit: "cover",
          imageHeight: "auto",
          imageWidth: "100%",
        },
      ],
    },
    {
      name: "Petunjuk Pengisian",
      elements: [
        {
          type: "html",
          name: "Survey Direction",
          html: '<div style=" \nbackground:#EEF4FB; \npadding:24px 20px; \nborder-radius:32px; \nwidth:100%; \nbox-sizing:border-box; \n"> \n \n<div style=" \nwidth:100%; \nbox-sizing:border-box; \nbackground:#FFFFFF; \nborder-radius:32px; \npadding:28px 24px 30px 24px; \nbox-shadow:0 8px 25px rgba(0,0,0,0.08); \ntext-align:center; \n"> \n \n<!-- TITLE --> \n<div style=" \nfont-size:22px; \nfont-weight:700; \nline-height:1.3; \ncolor:#071E40; \nmargin-bottom:10px; \n"> \nCustomer Survey \n</div> \n \n<!-- ACCENT LINE --> \n<div style=" \nwidth:60px; \nheight:3px; \nbackground:#4A90E2; \nborder-radius:10px; \nmargin:0 auto 22px auto; \n"> \n</div> \n \n<!-- CONTENT --> \n<div style=" \nwidth:100%; \nmax-width:1350px; \nmargin:0 auto; \nfont-size:16px; \nline-height:1.6; \ncolor:#071E40; \ntext-align:center; \n"> \n \n<p style=" \nmargin:0 0 18px 0; \ntext-align:center; \n"> \nTerima kasih atas kerja sama dan kepercayaan yang telah diberikan kepada PT Suparma Tbk.  \n</p> \n \n<p style=" \nmargin:0; \ntext-align:center; \n"> \nSebagai bagian dari komitmen kami untuk terus meningkatkan kualitas produk dan layanan, kami mengharapkan kesediaan Anda untuk memberikan penilaian secara objektif dan jujur, berdasarkan pengalaman, pengamatan, dan pendapat Anda selama menggunakan produk dan layanan PT Suparma Tbk. Setiap masukan yang diberikan akan menjadi bahan evaluasi dan pertimbangan kami dalam melakukan perbaikan ke depannya. \n</p> \n \n</div> \n \n<!-- BOTTOM ACCENT --> \n<div style=" \nwidth:160px; \nheight:1px; \nbackground:#D5E5F7; \nmargin:24px auto 0 auto; \n"> \n</div> \n \n</div> \n</div>',
        },
      ],
    },
    {
      name: "Identitas Responden",
      questionErrorLocation: "bottom",
      showNavigationButtons: true,
      elements: [
        {
          type: "html",
          name: "Header",
          html: "<div style='margin:-40px -40px 30px -40px;overflow:hidden;'><img src='https://api.surveyjs.io/private/Surveys/files?name=3a24c14a-303e-43d6-8cb0-2f88ee3ea054' style='width:100%;display:block;border-radius:0;'></div>",
        },
        {
          type: "dropdown",
          name: "Posisi Responden",
          title: "Posisi Anda di Perusahaan",
          isRequired: true,
          errorLocation: "bottom",
          choices: [
            {
              value: "9",
              text: "Owner / Pemilik",
            },
            {
              value: "1",
              text: "Purchasing / Procurement",
            },
            {
              value: "2",
              text: "General Affairs (GA)",
            },
            {
              value: "3",
              text: "Operations / Facility Management",
            },
            {
              value: "4",
              text: "Chef / Kitchen Staff",
            },
            {
              value: "5",
              text: "Housekeeping",
            },
            {
              value: "6",
              text: "Cleaning Service / Janitor",
            },
            {
              value: "7",
              text: "Steward",
            },
            {
              value: "8",
              text: "Office Support (OB/OG, Pantry Staff)",
            },
          ],
          showOtherItem: true,
          otherText: "Lainnya",
        },
        {
          type: "radiogroup",
          name: "Peran Responden",
          title:
            "Apa peran Anda dalam penggunaan atau pengadaan produk tissue di perusahaan?",
          isRequired: true,
          choices: [
            {
              value: "Item 1",
              text: "Saya terlibat dalam menentukan, memilih, atau melakukan pembelian produk tissue",
            },
            {
              value: "Item 2",
              text: "Saya menggunakan produk tissue dalam aktivitas operasional sehari-hari",
            },
            {
              value: "Item 3",
              text: "Saya melakukan keduanya",
            },
          ],
        },
      ],
    },
    {
      name: "Sales Procedure",
      visibleIf: "{Peran Responden} anyof ['Item 1', 'Item 3']",
      questionErrorLocation: "bottom",
      elements: [
        {
          type: "html",
          name: "Header1",
          html: "<div style='margin:-40px -40px 30px -40px;overflow:hidden;'><img src='https://api.surveyjs.io/private/Surveys/files?name=3a24c14a-303e-43d6-8cb0-2f88ee3ea054' style='width:100%;display:block;border-radius:0;'></div>",
        },
        {
          type: "html",
          name: "Intro",
          html: '<div style="\nbackground:linear-gradient(135deg,#FFFFFF,#F8FAFC);\npadding:28px 32px;\nborder-radius:16px;\nborder-left:8px solid #EEF4FB;\nbox-shadow:0 4px 16px rgba(0,0,0,.08);\n">\n    <div style="\n    color:#0F172A;\n    font-size:23px;\n    font-weight:700;\n    text-align:center;\n    margin-bottom:8px;">\n        Service Performance\n    </div>\n\n    <div style="\n    color:#0F172A;\n    font-size:15px;\n    text-align:center;\n    line-height:1.6;">\n        Mohon berikan penilaian berdasarkan pengalaman Anda selama 1 tahun  terakhir. Semakin ke kanan menunjukkan tingkat kepuasan yang semakin tinggi.\n    </div>\n</div>',
        },
        {
          type: "html",
          name: "Title",
          html: '<div style="\nbackground:#EEF4FB;\npadding:14px 24px;\nborder-radius:12px;\nmargin-top:10px;\ntext-align:center;\n">\n    <span style="\n    color:#1E293B;\n    font-size:20px;\n    font-weight:700;">\n         Sales Procedure\n    </span>\n</div>',
        },
        {
          type: "rating",
          name: "SP1",
          width: "10",
          minWidth: "100",
          indent: 1,
          title: "Kemudahan & Fleksibilitas Prosedur Pemesanan",
          titleLocation: "top",
          isRequired: true,
          errorLocation: "bottom",
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Tidak Memuaskan",
            },
            {
              value: 2,
              text: "Kurang Memuaskan",
            },
            {
              value: 3,
              text: "Cukup Memuaskan",
            },
            {
              value: 4,
              text: "Memuaskan",
            },
            {
              value: 5,
              text: "Sangat Memuaskan",
            },
          ],
          rateDescriptionLocation: "topBottom",
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "SP2",
          width: "10",
          minWidth: "100",
          startWithNewLine: false,
          indent: 1,
          title: "Kemudahan Proses Administrasi",
          titleLocation: "top",
          isRequired: true,
          errorLocation: "bottom",
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Tidak Memuaskan",
            },
            {
              value: 2,
              text: "Kurang Memuaskan",
            },
            {
              value: 3,
              text: "Cukup Memuaskan",
            },
            {
              value: 4,
              text: "Memuaskan",
            },
            {
              value: 5,
              text: "Sangat Memuaskan",
            },
          ],
          rateDescriptionLocation: "topBottom",
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "SP3",
          width: "10",
          minWidth: "100",
          indent: 1,
          title: "Kecepatan Proses Pemesanan Hingga Kesepakatan",
          titleLocation: "top",
          isRequired: true,
          errorLocation: "bottom",
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Tidak Memuaskan",
            },
            {
              value: 2,
              text: "Kurang Memuaskan",
            },
            {
              value: 3,
              text: "Cukup Memuaskan",
            },
            {
              value: 4,
              text: "Memuaskan",
            },
            {
              value: 5,
              text: "Sangat Memuaskan",
            },
          ],
          rateDescriptionLocation: "topBottom",
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "SP",
          width: "10",
          minWidth: "100",
          startWithNewLine: false,
          indent: 1,
          title: "Proses Pembelian Secara Keseluruhan",
          titleLocation: "top",
          isRequired: true,
          errorLocation: "bottom",
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Tidak Memuaskan",
            },
            {
              value: 2,
              text: "Kurang Memuaskan",
            },
            {
              value: 3,
              text: "Cukup Memuaskan",
            },
            {
              value: 4,
              text: "Memuaskan",
            },
            {
              value: 5,
              text: "Sangat Memuaskan",
            },
          ],
          rateDescriptionLocation: "topBottom",
          displayMode: "buttons",
        },
        {
          type: "checkbox",
          name: "Kendala SP",
          indent: 1,
          title:
            "Selama 6 bulan terakhir, kendala apa saja yang Anda alami dalam proses pemesanan produk?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Prosedur pemesanan terlalu rumit",
            },
            {
              value: "2",
              text: "Persyaratan administrasi terlalu rumit",
            },
            {
              value: "3",
              text: "Batas waktu pemesanan kurang sesuai",
            },
            {
              value: "4",
              text: "Proses pemesanan atau konfirmasi terlalu lama",
            },
            {
              value: "5",
              text: "Ketersediaan produk atau stok tidak pasti",
            },
            {
              value: "6",
              text: "Informasi harga atau promo kurang jelas",
            },
            {
              value: "7",
              text: "Perubahan atau pembatalan pesanan sulit dilakukan",
            },
          ],
          showOtherItem: true,
          showNoneItem: true,
          noneText: "Tidak ada kendala",
          otherText: "Lainnya",
          selectAllText: "Select all",
        },
        {
          type: "html",
          name: "Title1",
          html: '<div style="\nbackground:#EEF4FB;\npadding:14px 24px;\nborder-radius:12px;\nmargin-top:10px;\ntext-align:center;\n">\n    <span style="\n    color:#1E293B;\n    font-size:20px;\n    font-weight:700;">\n         Sales Force\n    </span>\n</div>',
        },
        {
          type: "rating",
          name: "SF1",
          width: "10",
          minWidth: "100",
          indent: 1,
          title: "Pemahaman Sales Terhadap Produk & Kebutuhan Pelanggan",
          titleLocation: "top",
          isRequired: true,
          errorLocation: "bottom",
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Tidak Memuaskan",
            },
            {
              value: 2,
              text: "Kurang Memuaskan",
            },
            {
              value: 3,
              text: "Cukup Memuaskan",
            },
            {
              value: 4,
              text: "Memuaskan",
            },
            {
              value: 5,
              text: "Sangat Memuaskan",
            },
          ],
          rateDescriptionLocation: "topBottom",
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "SF2",
          width: "10",
          minWidth: "100",
          startWithNewLine: false,
          indent: 1,
          title: "Inisiatif Sales dalam Memberikan Solusi yang Sesuai",
          titleLocation: "top",
          isRequired: true,
          errorLocation: "bottom",
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Tidak Memuaskan",
            },
            {
              value: 2,
              text: "Kurang Memuaskan",
            },
            {
              value: 3,
              text: "Cukup Memuaskan",
            },
            {
              value: 4,
              text: "Memuaskan",
            },
            {
              value: 5,
              text: "Sangat Memuaskan",
            },
          ],
          rateDescriptionLocation: "topBottom",
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "SF3",
          width: "10",
          minWidth: "100",
          indent: 1,
          title: "Responsivitas Sales dalam Konfirmasi Stok & Proses Order",
          titleLocation: "top",
          isRequired: true,
          errorLocation: "bottom",
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Tidak Memuaskan",
            },
            {
              value: 2,
              text: "Kurang Memuaskan",
            },
            {
              value: 3,
              text: "Cukup Memuaskan",
            },
            {
              value: 4,
              text: "Memuaskan",
            },
            {
              value: 5,
              text: "Sangat Memuaskan",
            },
          ],
          rateDescriptionLocation: "topBottom",
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "SF4",
          width: "10",
          minWidth: "100",
          startWithNewLine: false,
          indent: 1,
          title: "Konsistensi Komunikasi & Kunjungan Sales ",
          titleLocation: "top",
          isRequired: true,
          errorLocation: "bottom",
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Tidak Memuaskan",
            },
            {
              value: 2,
              text: "Kurang Memuaskan",
            },
            {
              value: 3,
              text: "Cukup Memuaskan",
            },
            {
              value: 4,
              text: "Memuaskan",
            },
            {
              value: 5,
              text: "Sangat Memuaskan",
            },
          ],
          rateDescriptionLocation: "topBottom",
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "SF5",
          width: "10",
          minWidth: "100",
          indent: 1,
          title: "Kecepatan & Efektivitas Penanganan Komplain/Retur",
          titleLocation: "top",
          isRequired: true,
          errorLocation: "bottom",
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Tidak Memuaskan",
            },
            {
              value: 2,
              text: "Kurang Memuaskan",
            },
            {
              value: 3,
              text: "Cukup Memuaskan",
            },
            {
              value: 4,
              text: "Memuaskan",
            },
            {
              value: 5,
              text: "Sangat Memuaskan",
            },
          ],
          rateDescriptionLocation: "bottom",
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "SF6",
          width: "10",
          minWidth: "100",
          startWithNewLine: false,
          indent: 1,
          title: "Kinerja Tim Sales Secara Keseluruhan",
          titleLocation: "top",
          isRequired: true,
          errorLocation: "bottom",
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Tidak Memuaskan",
            },
            {
              value: 2,
              text: "Kurang Memuaskan",
            },
            {
              value: 3,
              text: "Cukup Memuaskan",
            },
            {
              value: 4,
              text: "Memuaskan",
            },
            {
              value: 5,
              text: "Sangat Memuaskan",
            },
          ],
          rateDescriptionLocation: "topBottom",
          displayMode: "buttons",
        },
        {
          type: "checkbox",
          name: "Kendala SF",
          indent: 1,
          title:
            "Selama 6 bulan terakhir, kendala apa saja yang Anda alami dalam berinteraksi dengan sales?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Respons dan follow-up sales lambat",
            },
            {
              value: "2",
              text: "Sales kurang proaktif memberikan informasi",
            },
            {
              value: "3",
              text: "Informasi dari sales kurang jelas atau akurat",
            },
            {
              value: "4",
              text: "Sales kurang memahami kebutuhan customer",
            },
            {
              value: "5",
              text: "Sales kurang memahami produk",
            },
            {
              value: "6",
              text: "Penanganan kendala kurang cepat atau efektif",
            },
            {
              value: "7",
              text: "Kunjungan sales kurang rutin",
            },
          ],
          showOtherItem: true,
          showNoneItem: true,
          noneText: "Tidak ada kendala",
          otherText: "Lainnya",
        },
        {
          type: "html",
          name: "question10",
          html: '<div style="\nbackground:#EEF4FB;\npadding:14px 24px;\nborder-radius:12px;\nmargin-top:10px;\ntext-align:center;\n">\n    <span style="\n    color:#1E293B;\n    font-size:20px;\n    font-weight:700;">\n         Account Receivable\n    </span>\n</div>',
        },
        {
          type: "rating",
          name: "AR1",
          width: "10",
          minWidth: "100",
          indent: 1,
          title: "Akurasi & Kejelasan Informasi Pada Tagihan",
          titleLocation: "top",
          isRequired: true,
          errorLocation: "bottom",
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Tidak Memuaskan",
            },
            {
              value: 2,
              text: "Kurang Memuaskan",
            },
            {
              value: 3,
              text: "Cukup Memuaskan",
            },
            {
              value: 4,
              text: "Memuaskan",
            },
            {
              value: 5,
              text: "Sangat Memuaskan",
            },
          ],
          rateDescriptionLocation: "bottom",
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "AR2",
          width: "10",
          minWidth: "100",
          startWithNewLine: false,
          indent: 1,
          title: "Kemudahan Proses Pembayaran & Rekonsiliasi",
          titleLocation: "top",
          isRequired: true,
          errorLocation: "bottom",
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Tidak Memuaskan",
            },
            {
              value: 2,
              text: "Kurang Memuaskan",
            },
            {
              value: 3,
              text: "Cukup Memuaskan",
            },
            {
              value: 4,
              text: "Memuaskan",
            },
            {
              value: 5,
              text: "Sangat Memuaskan",
            },
          ],
          rateDescriptionLocation: "bottom",
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "AR3",
          width: "10",
          minWidth: "100",
          indent: 1,
          title: "Responsivitas & Profesionalisme Tim AR",
          titleLocation: "top",
          isRequired: true,
          errorLocation: "bottom",
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Tidak Memuaskan",
            },
            {
              value: 2,
              text: "Kurang Memuaskan",
            },
            {
              value: 3,
              text: "Cukup Memuaskan",
            },
            {
              value: 4,
              text: "Memuaskan",
            },
            {
              value: 5,
              text: "Sangat Memuaskan",
            },
          ],
          rateDescriptionLocation: "bottom",
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "AR",
          width: "10",
          minWidth: "100",
          startWithNewLine: false,
          indent: 1,
          title: "Proses Penagihan Secara Keseluruhan",
          titleLocation: "top",
          isRequired: true,
          errorLocation: "bottom",
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Tidak Memuaskan",
            },
            {
              value: 2,
              text: "Kurang Memuaskan",
            },
            {
              value: 3,
              text: "Cukup Memuaskan",
            },
            {
              value: 4,
              text: "Memuaskan",
            },
            {
              value: 5,
              text: "Sangat Memuaskan",
            },
          ],
          rateDescriptionLocation: "bottom",
          displayMode: "buttons",
        },
        {
          type: "checkbox",
          name: "Kendala AR",
          indent: 1,
          title:
            "Selama 6 bulan terakhir, kendala apa saja yang Anda alami terkait layanan Account Receivable?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Invoice terlambat diterima",
            },
            {
              value: "2",
              text: "Terdapat kesalahan data pada invoice/faktur",
            },
            {
              value: "3",
              text: "Masa penagihan kurang sesuai",
            },
            {
              value: "4",
              text: "Informasi pembayaran kurang jelas",
            },
            {
              value: "5",
              text: "Ketentuan TOP kurang fleksibel",
            },
            {
              value: "6",
              text: "Respons tim AR lambat",
            },
            {
              value: "7",
              text: "Penyelesaian kendala AR terlalu lama",
            },
          ],
          showOtherItem: true,
          showNoneItem: true,
          noneText: "Tidak ada kendala",
          otherText: "Lainnya",
        },
        {
          type: "html",
          name: "Title2",
          html: '<div style="\nbackground:#EEF4FB;\npadding:14px 24px;\nborder-radius:12px;\nmargin-top:10px;\ntext-align:center;\n">\n    <span style="\n    color:#1E293B;\n    font-size:20px;\n    font-weight:700;">\n         Delivery\n    </span>\n</div>',
        },
        {
          type: "rating",
          name: "D1",
          width: "10",
          minWidth: "100",
          indent: 1,
          title: "Ketepatan Waktu Pengiriman",
          titleLocation: "top",
          isRequired: true,
          errorLocation: "bottom",
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Tidak Memuaskan",
            },
            {
              value: 2,
              text: "Kurang Memuaskan",
            },
            {
              value: 3,
              text: "Cukup Memuaskan",
            },
            {
              value: 4,
              text: "Memuaskan",
            },
            {
              value: 5,
              text: "Sangat Memuaskan",
            },
          ],
          rateDescriptionLocation: "bottom",
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "D2",
          width: "10",
          minWidth: "100",
          startWithNewLine: false,
          indent: 1,
          title: "Akurasi Jumlah Barang Diterima",
          titleLocation: "top",
          isRequired: true,
          errorLocation: "bottom",
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Tidak Memuaskan",
            },
            {
              value: 2,
              text: "Kurang Memuaskan",
            },
            {
              value: 3,
              text: "Cukup Memuaskan",
            },
            {
              value: 4,
              text: "Memuaskan",
            },
            {
              value: 5,
              text: "Sangat Memuaskan",
            },
          ],
          rateDescriptionLocation: "bottom",
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "D3",
          width: "10",
          minWidth: "100",
          indent: 1,
          title: "Kelengkapan Dokumen Pengiriman",
          titleLocation: "top",
          isRequired: true,
          errorLocation: "bottom",
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Tidak Memuaskan",
            },
            {
              value: 2,
              text: "Kurang Memuaskan",
            },
            {
              value: 3,
              text: "Cukup Memuaskan",
            },
            {
              value: 4,
              text: "Memuaskan",
            },
            {
              value: 5,
              text: "Sangat Memuaskan",
            },
          ],
          rateDescriptionLocation: "bottom",
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "D4",
          width: "10",
          minWidth: "100",
          startWithNewLine: false,
          indent: 1,
          title: "Fleksibilitas Syarat Pengiriman",
          titleLocation: "top",
          isRequired: true,
          errorLocation: "bottom",
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Tidak Memuaskan",
            },
            {
              value: 2,
              text: "Kurang Memuaskan",
            },
            {
              value: 3,
              text: "Cukup Memuaskan",
            },
            {
              value: 4,
              text: "Memuaskan",
            },
            {
              value: 5,
              text: "Sangat Memuaskan",
            },
          ],
          rateDescriptionLocation: "bottom",
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "D5",
          width: "10",
          minWidth: "100",
          indent: 1,
          title: "Kondisi Produk Saat Diterima",
          titleLocation: "top",
          isRequired: true,
          errorLocation: "bottom",
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Tidak Memuaskan",
            },
            {
              value: 2,
              text: "Kurang Memuaskan",
            },
            {
              value: 3,
              text: "Cukup Memuaskan",
            },
            {
              value: 4,
              text: "Memuaskan",
            },
            {
              value: 5,
              text: "Sangat Memuaskan",
            },
          ],
          rateDescriptionLocation: "bottom",
          displayMode: "buttons",
        },
        {
          type: "rating",
          name: "D",
          width: "10",
          minWidth: "100",
          startWithNewLine: false,
          indent: 1,
          title: "Performa Pengiriman Secara Keseluruhan",
          titleLocation: "top",
          isRequired: true,
          errorLocation: "bottom",
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Tidak Memuaskan",
            },
            {
              value: 2,
              text: "Kurang Memuaskan",
            },
            {
              value: 3,
              text: "Cukup Memuaskan",
            },
            {
              value: 4,
              text: "Memuaskan",
            },
            {
              value: 5,
              text: "Sangat Memuaskan",
            },
          ],
          rateDescriptionLocation: "bottom",
          displayMode: "buttons",
        },
        {
          type: "checkbox",
          name: "Kendala D",
          indent: 1,
          title:
            "Selama 6 bulan terakhir, kendala apa saja yang Anda alami terkait proses pengiriman?",
          isRequired: true,
          errorLocation: "bottom",
          choices: [
            {
              value: "1",
              text: "Pengiriman terlambat",
            },
            {
              value: "2",
              text: "Jadwal pengiriman tidak sesuai",
            },
            {
              value: "3",
              text: "Pengiriman dilakukan secara partial",
            },
            {
              value: "4",
              text: "Barang yang diterima tidak sesuai pesanan",
            },
            {
              value: "5",
              text: "Kondisi barang saat diterima kurang baik",
            },
            {
              value: "6",
              text: "Informasi status atau jadwal pengiriman kurang jelas",
            },
            {
              value: "7",
              text: "Dokumen pengiriman tidak lengkap",
            },
          ],
          showOtherItem: true,
          showNoneItem: true,
          noneText: "Tidak ada kendala",
          otherText: "Lainnya",
        },
        {
          type: "radiogroup",
          name: "Frekuensi Terlambat Kirim",
          visibleIf: "{Kendala D} anyof [1]",
          indent: 1,
          title: "Seberapa sering Anda mengalami keterlambatan pengiriman?",
          isRequired: true,
          errorLocation: "bottom",
          choices: [
            {
              value: "1",
              text: "Sesekali (1 - 3 dari 10 pengiriman)\t",
            },
            {
              value: "2",
              text: "Cukup sering (4 - 6 dari 10 pengiriman)\t",
            },
            {
              value: "3",
              text: "Sangat sering (>6 dari 10 pengiriman)\t",
            },
          ],
        },
      ],
    },
    {
      name: "Procurement Preference",
      visibleIf: "{Peran Responden} anyof ['Item 1', 'Item 3']",
      elements: [
        {
          type: "html",
          name: "Header4",
          html: "<div style='margin:-40px -40px 30px -40px;overflow:hidden;'><img src='https://api.surveyjs.io/private/Surveys/files?name=3a24c14a-303e-43d6-8cb0-2f88ee3ea054' style='width:100%;display:block;border-radius:0;'></div>",
        },
        {
          type: "html",
          name: "Intro3",
          html: '<div style="\nbackground:linear-gradient(135deg,#FFFFFF,#F8FAFC);\npadding:28px 32px;\nborder-radius:16px;\nborder-left:8px solid #EEF4FB;\nbox-shadow:0 4px 16px rgba(0,0,0,.08);\n">\n    <div style="\n    color:#0F172A;\n    font-size:23px;\n    font-weight:700;\n    text-align:center;\n    margin-bottom:8px;">\n        Buying Preference\n    </div>\n\n    <div style="\n    color:#0F172A;\n    font-size:15px;\n    text-align:center;\n    line-height:1.6;">\n       Mohon berikan jawaban berdasarkan kebijakan, pertimbangan, dan preferensi perusahaan/instansi Anda.\n    </div>\n</div>',
        },
        {
          type: "checkbox",
          name: "BP1",
          title:
            "Faktor apa yang paling memengaruhi keputusan perusahaan dalam memilih supplier produk tissue?",
          description: "Pilih 3 faktor",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Kualitas produk",
            },
            {
              value: "2",
              text: "Harga",
            },
            {
              value: "3",
              text: "Ketersediaan stok",
            },
            {
              value: "4",
              text: "Ketepatan pengiriman",
            },
            {
              value: "5",
              text: "Kemudahan pemesanan & administrasi",
            },
            {
              value: "6",
              text: "Pelayanan & respons supplier",
            },
            {
              value: "7",
              text: "Kelengkapan produk",
            },
            {
              value: "8",
              text: "Komitmen terhadap lingkungan",
            },
          ],
          showOtherItem: true,
          otherText: "Lainnya",
          maxSelectedChoices: 3,
          minSelectedChoices: 3,
        },
        {
          type: "checkbox",
          name: "BP2",
          title:
            "Program kerja sama apa yang paling menarik bagi perusahaan Anda untuk mendukung kemitraan jangka panjang?",
          description: "Pilih maksimal 3 opsi",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Diskon volume",
            },
            {
              value: "2",
              text: "Harga kontrak",
            },
            {
              value: "3",
              text: "Rebate / insentif pembelian",
            },
            {
              value: "4",
              text: "Bundling produk",
            },
            {
              value: "5",
              text: "Layanan prioritas",
            },
            {
              value: "6",
              text: "Program loyalitas",
            },
          ],
          showOtherItem: true,
          otherText: "Lainnya",
          maxSelectedChoices: 3,
        },
        {
          type: "html",
          name: "Intro5",
          html: '<div style="\nbackground:linear-gradient(135deg,#FFFFFF,#F8FAFC);\npadding:28px 32px;\nborder-radius:16px;\nborder-left:8px solid #EEF4FB;\nbox-shadow:0 4px 16px rgba(0,0,0,.08);\n">\n    <div style="\n    color:#0F172A;\n    font-size:23px;\n    font-weight:700;\n    text-align:center;\n    margin-bottom:8px;">\n        Sustainability Aspect\n    </div>\n\n    <div style="\n    color:#0F172A;\n    font-size:15px;\n    text-align:center;\n    line-height:1.6;">\n       Mohon berikan jawaban berdasarkan kebijakan, pertimbangan, dan preferensi perusahaan/instansi Anda.\n    </div>\n</div>',
        },
        {
          type: "radiogroup",
          name: "SA1",
          title:
            "Apakah perusahaan Anda memiliki kebijakan terkait pengadaan produk yang ramah lingkungan?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Ya, sudah diterapkan secara ketat",
            },
            {
              value: "2",
              text: "Ya, sedang dalam tahap implementasi",
            },
            {
              value: "3",
              text: "Belum ada kebijakan formal, tetapi menjadi perhatian",
            },
            {
              value: "4",
              text: "Belum menjadi perhatian",
            },
          ],
        },
        {
          type: "rating",
          name: "SA2",
          title:
            "Seberapa penting aspek ramah lingkungan dalam keputusan pembelian produk tissue di perusahaan Anda?",
          isRequired: true,
          minRateDescription: "Sangat Tidak Penting",
          maxRateDescription: "Sangat Penting",
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "radiogroup",
          name: "SA3",
          title:
            "Apabila tersedia produk Tissue Eco-Friendly Premium yang telah memiliki sertifikasi internasional (FSC/Ecolabel) serta menggunakan kemasan 100% bebas plastik, berapa tambahan harga maksimum yang dapat diterima?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Tidak bersedia membayar lebih",
            },
            {
              value: "2",
              text: "Hingga 10% lebih mahal",
            },
            {
              value: "3",
              text: "11–15% lebih mahal",
            },
            {
              value: "4",
              text: "16–20% lebih mahal",
            },
            {
              value: "5",
              text: "21–25% lebih mahal",
            },
            {
              value: "6",
              text: "26–30% lebih mahal",
            },
            {
              value: "7",
              text: "Lebih dari 30% lebih mahal",
            },
            {
              value: "8",
              text: "Tidak tahu / sulit menentukan",
            },
          ],
        },
      ],
    },
    {
      name: "Purchased Products",
      elements: [
        {
          type: "html",
          name: "Header6",
          html: '<div style="\nmargin:-38px -40px 30px -40px;\noverflow:hidden;\n">\n\n<img\nsrc="https://api.surveyjs.io/private/Surveys/files?name=3a24c14a-303e-43d6-8cb0-2f88ee3ea054"\nstyle="\nwidth:100%;\ndisplay:block;\nborder-radius:0;\n">\n</div>',
        },
        {
          type: "html",
          name: "question1",
          html: '<div style="\nbackground:linear-gradient(135deg,#FFFFFF,#F8FAFC);\npadding:28px 32px;\nborder-radius:16px;\nborder-left:8px solid #EEF4FB;\nbox-shadow:0 4px 16px rgba(0,0,0,.08);\n">\n    <div style="\n    color:#0F172A;\n    font-size:23px;\n    font-weight:700;\n    text-align:center;\n    margin-bottom:8px;">\n    Product Usage Category\n    </div>',
        },
        {
          type: "checkbox",
          name: "Ordered Tissue (Procurement)",
          visibleIf: "{Peran Responden} anyof ['Item 1', 'Item 3']",
          title:
            "Mohon pilih kategori produk tissue Suparma yang dibeli atau digunakan oleh perusahaan Anda selama 1 tahun terakhir.",
          isRequired: true,
          choices: [
            {
              value: "Item 1",
              text: "Facial Tissue",
            },
            {
              value: "Item 2",
              text: "Bathroom Tissue",
            },
            {
              value: "Item 3",
              text: "Hand Towel",
            },
            {
              value: "Item 4",
              text: "Kitchen Towel",
            },
            {
              value: "Item 5",
              text: "Cocktail Napkin",
            },
            {
              value: "Item 6",
              text: "Dinner Napkin",
            },
            {
              value: "Item 7",
              text: "Luncheon Napkin",
            },
          ],
        },
        {
          type: "checkbox",
          name: "Used Tissue (End User)",
          visibleIf: "{Peran Responden} anyof ['Item 2']",
          title:
            "Mohon pilih kategori produk tissue Suparma yang saat ini digunakan di area kerja Anda selama 1 tahun terakhir.",
          isRequired: true,
          choices: [
            {
              value: "Item 1",
              text: "Facial Tissue",
            },
            {
              value: "Item 2",
              text: "Bathroom Tissue",
            },
            {
              value: "Item 3",
              text: "Hand Towel",
            },
            {
              value: "Item 4",
              text: "Kitchen Towel",
            },
            {
              value: "Item 5",
              text: "Cocktail Napkin",
            },
            {
              value: "Item 6",
              text: "Dinner Napkin",
            },
            {
              value: "Item 7",
              text: "Luncheon Napkin",
            },
          ],
        },
      ],
    },
    {
      name: "Facial Tissue",
      visibleIf:
        "{Ordered Tissue (Procurement)} anyof ['Item 1'] or {Used Tissue (End User)} anyof ['Item 1']",
      questionErrorLocation: "bottom",
      elements: [
        {
          type: "html",
          name: "Header7",
          html: '<div style="\nmargin:-38px -40px 30px -40px;\noverflow:hidden;\n">\n\n<img\nsrc="https://api.surveyjs.io/private/Surveys/files?name=3a24c14a-303e-43d6-8cb0-2f88ee3ea054"\nstyle="\nwidth:100%;\ndisplay:block;\nborder-radius:0;\n">\n</div>',
        },
        {
          type: "html",
          name: "question19",
          html: '<div style="\nbackground:linear-gradient(135deg,#FFFFFF,#F8FAFC);\npadding:28px 32px;\nborder-radius:16px;\nborder-left:8px solid #EEF4FB;\nbox-shadow:0 4px 16px rgba(0,0,0,.08);\n">\n    <div style="\n    color:#0F172A;\n    font-size:23px;\n    font-weight:700;\n    text-align:center;\n    margin-bottom:8px;">\n        Facial Tissue\n    </div>',
        },
        {
          type: "checkbox",
          name: "Jenis FT",
          title:
            "Apa saja jenis Facial Tissue Suparma yang dibeli atau digunakan oleh perusahaan Anda selama 1 tahun terakhir?",
          isRequired: true,
          errorLocation: "bottom",
          choices: [
            {
              value: "1",
              text: "Facial Tissue Soft Pack",
            },
            {
              value: "2",
              text: "Facial Tissue Soft Pack - Kiloan",
            },
            {
              value: "3",
              text: "Facial Tissue Hard Pack - Cube",
            },
            {
              value: "4",
              text: "Facial Tissue Hard Pack - Long",
            },
            {
              value: "5",
              text: "Facial Tissue Pop Up",
            },
            {
              value: "6",
              text: "Facial Tissue Travel Pack",
            },
            {
              value: "7",
              text: "Facial Tissue Handkerchief",
            },
            {
              value: "8",
              text: "Facial Tissue MG Refill - Paperwrap",
            },
          ],
        },
        {
          type: "matrixdropdown",
          name: "Needs FT",
          visibleIf: "{Ordered Tissue (Procurement)} anyof ['Item 1']",
          title:
            "Pilih opsi yang paling sesuai untuk menggambarkan aktivitas pembelian Facial Tissue di perusahaan Anda selama 1 tahun terakhir.",
          isRequired: true,
          errorLocation: "bottom",
          columns: [
            {
              name: "FT - Purchase Frequency",
              title: "Frekuensi Order",
              cellType: "dropdown",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "Kurang dari 1 bulan sekali",
                },
                {
                  value: 2,
                  text: "1 bulan sekali",
                },
                {
                  value: 3,
                  text: "2 bulan sekali",
                },
                {
                  value: 4,
                  text: "3 bulan sekali",
                },
                {
                  value: 5,
                  text: "lebih dari 3 bulan sekali",
                },
              ],
              storeOthersAsComment: true,
            },
            {
              name: "FT - Vol per Purchase",
              title: "Volume per Order",
              cellType: "dropdown",
              isRequired: true,
              choices: [
                {
                  value: 1,
                  text: "≤ 10 karton",
                },
                {
                  value: 2,
                  text: "11–50 karton",
                },
                {
                  value: 3,
                  text: "51–100 karton",
                },
                {
                  value: 4,
                  text: "101–300 karton",
                },
                {
                  value: 5,
                  text: "> 300 karton",
                },
              ],
              storeOthersAsComment: true,
            },
            {
              name: "FT - Supplier",
              title: "Semua Merek yang Digunakan",
              cellType: "tagbox",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "See U",
                },
                {
                  value: "2",
                  text: "Plenty",
                },
                {
                  value: "3",
                  text: "Paseo",
                },
                {
                  value: "4",
                  text: "Nice",
                },
                {
                  value: "5",
                  text: "Tessa",
                },
                {
                  value: "6",
                  text: "Livi",
                },
                {
                  value: "7",
                  text: "Montiss",
                },
                {
                  value: "8",
                  text: "Jolly",
                },
              ],
              showOtherItem: true,
              otherPlaceholder: "",
              noneText: "Tidak Ada",
              otherText: "Lainnya",
              storeOthersAsComment: true,
              selectAllText: "All",
            },
            {
              name: "FT - Price Comp",
              title: "Harga Suparma Dibandingkan Merek Lain",
              cellType: "dropdown",
              isRequired: true,
              choices: [
                {
                  value: 1,
                  text: "Tidak Bersaing",
                },
                {
                  value: 2,
                  text: "Kurang Bersaing",
                },
                {
                  value: 3,
                  text: "Cukup Bersaing",
                },
                {
                  value: 4,
                  text: "Bersaing",
                },
                {
                  value: 5,
                  text: "Sangat Bersaing",
                },
              ],
              storeOthersAsComment: true,
            },
          ],
          cellErrorLocation: "bottom",
          choices: [1, 2, 3, 4, 5],
          rows: [
            {
              value: "1",
              text: "Facial Tissue Soft Pack",
              visibleIf: "{Jenis FT} anyof [1]",
            },
            {
              value: "2",
              text: "Facial Tissue Soft Pack - Kiloan",
              visibleIf: "{Jenis FT} anyof [2]",
            },
            {
              value: "3",
              text: "Facial Tissue Hard Pack - Cube",
              visibleIf: "{Jenis FT} anyof [3]",
            },
            {
              value: "4",
              text: "Facial Tissue Hard Pack - Long",
              visibleIf: "{Jenis FT} anyof [4]",
            },
            {
              value: "5",
              text: "Facial Tissue Pop Up",
              visibleIf: "{Jenis FT} anyof [5]",
            },
            {
              value: "6",
              text: "Facial Tissue Travel Pack",
              visibleIf: "{Jenis FT} anyof [6]",
            },
            {
              value: "7",
              text: "Facial Tissue Handkerchief",
              visibleIf: "{Jenis FT} anyof [7]",
            },
            {
              value: "8",
              text: "Facial Tissue MG Refill - Paperwrap",
              visibleIf: "{Jenis FT} anyof [8]",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "FT - Penggunaan DM",
          visibleIf: "{Peran Responden} anyof ['Item 1', 'Item 3']",
          title:
            "Apakah Anda pernah menggunakan secara langsung produk Facial Tissue Suparma (Plenty & See U)?",
          isRequired: true,
          choices: [
            {
              value: "Item 1",
              text: "Ya, pernah menggunakan",
            },
            {
              value: "Item 2",
              text: "Tidak pernah",
            },
          ],
        },
        {
          type: "html",
          name: "Title7",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 1'] or {FT - Penggunaan DM} = 'Item 1'",
          html: '<div style="\nbackground:#EEF4FB;\npadding:14px 24px;\nborder-radius:12px;\nmargin-top:10px;\ntext-align:center;\n">\n    <span style="\n    color:#1E293B;\n    font-size:20px;\n    font-weight:700;">\n         Kualitas Produk\n    </span>\n</div>',
        },
        {
          type: "rating",
          name: "FT - Tekstur",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 1'] or {FT - Penggunaan DM} = 'Item 1'",
          title:
            "Bagaimana TEKSTUR Facial Tissue Suparma saat bersentuhan dengan kulit Anda?",
          isRequired: true,
          autoGenerate: false,
          rateCount: 6,
          rateValues: ["1", "2", "3", "4", "5", "6"],
          minRateDescription: "Sangat Kasar",
          maxRateDescription: "Sangat Lembut",
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "FT - Kekuatan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 1'] or {FT - Penggunaan DM} = 'Item 1'",
          startWithNewLine: false,
          title: "Bagaimana KEKUATAN Facial Tissue Suparma saat digunakan?",
          isRequired: true,
          autoGenerate: false,
          rateCount: 6,
          rateValues: ["1", "2", "3", "4", "5", "6"],
          minRateDescription: "Sangat Mudah Robek",
          maxRateDescription: "Sangat Kuat",
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "FT - Kebersihan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 1'] or {FT - Penggunaan DM} = 'Item 1'",
          title: "Bagaimana KEBERSIHAN Facial Tissue Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat banyak serat, debu, atau noda",
            },
            {
              value: "2",
              text: "Banyak serat, debu, atau noda",
            },
            {
              value: "3",
              text: "Agak banyak serat, debu, atau noda",
            },
            {
              value: "4",
              text: "Agak bersih",
            },
            {
              value: "5",
              text: "Bersih",
            },
            {
              value: "6",
              text: "Sangat bersih",
            },
          ],
          minRateDescription: {
            default: "Banyak Noda",
            id: "Sangat Banyak Noda",
          },
          maxRateDescription: "Sangat Bersih",
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "FT - Ukuran",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 1'] or {FT - Penggunaan DM} = 'Item 1'",
          startWithNewLine: false,
          title: "Bagaimana UKURAN LEMBAR Facial Tissue Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat kecil",
            },
            {
              value: "2",
              text: "Kecil",
            },
            {
              value: "3",
              text: "Cukup kecil",
            },
            {
              value: "4",
              text: "Cukup lebar",
            },
            {
              value: "5",
              text: "Lebar",
            },
            {
              value: "6",
              text: "Sangat lebar",
            },
          ],
          minRateDescription: "Sangat Kecil",
          maxRateDescription: "Sangat Lebar",
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "FT - Desain",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 1'] or {FT - Penggunaan DM} = 'Item 1'",
          title: "Bagaimana DESAIN KEMASAN Facial Tissue Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: "1",
              text: "Tidak menarik",
            },
            {
              value: "2",
              text: "Kurang menarik",
            },
            {
              value: "3",
              text: "Biasa saja",
            },
            {
              value: "4",
              text: "Menarik",
            },
            {
              value: "5",
              text: "Sangat menarik",
            },
          ],
          minRateDescription: "Tidak Menarik",
          maxRateDescription: "Sangat Menarik",
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "FT - Kualitas Packaging",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 1'] or {FT - Penggunaan DM} = 'Item 1'",
          startWithNewLine: false,
          title: "Bagaimana KUALITAS KEMASAN Facial Tissue Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: "1",
              text: "Sangat buruk",
            },
            {
              value: "2",
              text: "Buruk",
            },
            {
              value: "3",
              text: "Biasa saja",
            },
            {
              value: "4",
              text: "Baik",
            },
            {
              value: "5",
              text: "Sangat baik",
            },
          ],
          minRateDescription: "Sangat Buruk",
          maxRateDescription: "Sangat Baik",
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "FT Overall Satisfaction",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 1'] or {FT - Penggunaan DM} = 'Item 1'",
          title:
            "Secara keseluruhan, bagaimana penilaian Anda terhadap produk Facial Tissue Suparma?",
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Tidak Memuaskan",
            },
            {
              value: 2,
              text: "Kurang Memuaskan",
            },
            {
              value: 3,
              text: "Cukup Memuaskan",
            },
            {
              value: 4,
              text: "Memuaskan",
            },
            {
              value: 5,
              text: "Sangat Memuaskan",
            },
          ],
          minRateDescription: "Tidak Memuaskan",
          maxRateDescription: "Sangat Memuaskan",
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "html",
          name: "Title8",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 1'] or {FT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          html: '<div style="\nbackground:#EEF4FB;\npadding:14px 24px;\nborder-radius:12px;\nmargin-top:10px;\ntext-align:center;\n">\n    <span style="\n    color:#1E293B;\n    font-size:20px;\n    font-weight:700;">\n         Preferensi Produk\n    </span>\n</div>',
        },
        {
          type: "ranking",
          name: "FT - Rank",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 1'] or {FT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Mohon urutkan aspek-aspek berikut berdasarkan tingkat kepentingannya bagi perusahaan Anda dalam memilih produk Facial Tissue",
          description:
            "Drag & drop untuk mengurutkan atribut dari yang paling penting",
          isRequired: true,
          errorLocation: "bottom",
          choices: [
            {
              value: "1",
              text: "Kelembutan",
            },
            {
              value: "2",
              text: "Kekuatan",
            },
            {
              value: "3",
              text: "Kebersihan",
            },
            {
              value: "6",
              text: "Ukuran",
            },
            {
              value: "8",
              text: "Jumlah Lembar",
            },
            {
              value: "7",
              text: "Desain Kemasan",
            },
          ],
        },
        {
          type: "checkbox",
          name: "FT - Keunggulan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 1'] or {FT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          startWithNewLine: false,
          title:
            "Menurut Anda, apa saja keunggulan utama Facial Tissue Suparma dibandingkan dengan produk dari supplier lain?",
          description: "Pilih maksimal 3 opsi",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Kelembutan",
            },
            {
              value: "2",
              text: "Kekuatan",
            },
            {
              value: "3",
              text: "Kebersihan",
            },
            {
              value: "7",
              text: "Ukuran",
            },
            {
              value: "9",
              text: "Jumlah Lembar",
            },
            {
              value: "8",
              text: "Desain Kemasan",
            },
          ],
          otherText: "Lainnya",
          maxSelectedChoices: 3,
        },
        {
          type: "boolean",
          name: "FT - Preferensi Tekstur",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 1'] or {FT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Karakteristik Facial Tissue seperti apa yang paling sesuai dengan kebutuhan operasional Anda?",
          isRequired: true,
          labelTrue: "Sangat Kuat",
          labelFalse: "Sangat Lembut",
        },
        {
          type: "boolean",
          name: "FT - Preferensi Permukaan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 1'] or {FT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Permukaan Facial Tissue seperti apa yang paling sesuai dengan kebutuhan operasional Anda?",
          isRequired: true,
          labelTrue: "Bertekstur & Tebal",
          labelFalse: "Halus & Tipis",
        },
        {
          type: "boolean",
          name: "FT - Preferensi Daya Serap",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 1'] or {FT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Saat terkena air atau cairan, karakteristik Facial Tissue seperti apa yang paling sesuai dengan kebutuhan operasional Anda? ",
          isRequired: true,
          labelTrue: "Tidak Mudah Sobek",
          labelFalse: "Mudah Menyerap",
        },
        {
          type: "boolean",
          name: "FT - Aroma",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 1'] or {FT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Aroma Facial Tissue seperti apa yang lebih Anda pilih untuk kebutuhan operasional?",
          isRequired: true,
          labelTrue: "Beraroma Wangi",
          labelFalse: "Tidak Beraroma",
        },
        {
          type: "radiogroup",
          name: "FT - Preferensi Material Kemasan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 1'] or {FT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Jenis kemasan Facial Tissue seperti apa yang paling sesuai dengan kebutuhan perusahaan Anda?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Kemasan plastik konvensional",
            },
            {
              value: "2",
              text: "Kemasan plastik ramah lingkungan (biodegradable)",
            },
            {
              value: "3",
              text: "Kemasan kardus atau kertas (paper-based)",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "FT - Preferensi Dispenser",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 1'] or {FT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          startWithNewLine: false,
          title:
            "Apakah perusahaan Anda tertarik untuk menggunakan wadah atau dispenser Facial Tissue yang disediakan oleh Suparma?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Ya, sudah menggunakan",
            },
            {
              value: "2",
              text: "Ya, ingin menggunakan",
            },
            {
              value: "3",
              text: "Tidak, belum membutuhkan",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "FT - Switching Behaviour",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 1'] or {FT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Jika ada supplier lain yang menawarkan Facial Tissue dengan kualitas relatif setara dan harga 5% lebih murah, langkah apa yang paling mungkin dilakukan perusahaan Anda?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Tetap menggunakan Suparma",
            },
            {
              value: "2",
              text: "Mengalihkan sebagian pembelian",
            },
            {
              value: "3",
              text: "Beralih sepenuhnya ke supplier lain",
            },
          ],
        },
      ],
    },
    {
      name: "Bathroom Tissue",
      visibleIf:
        "{Ordered Tissue (Procurement)} anyof ['Item 2'] or {Used Tissue (End User)} anyof ['Item 2']",
      elements: [
        {
          type: "html",
          name: "question41",
          html: '<div style="\nmargin:-38px -40px 30px -40px;\noverflow:hidden;\n">\n\n<img\nsrc="https://api.surveyjs.io/private/Surveys/files?name=3a24c14a-303e-43d6-8cb0-2f88ee3ea054"\nstyle="\nwidth:100%;\ndisplay:block;\nborder-radius:0;\n">\n</div>',
        },
        {
          type: "html",
          name: "question2",
          html: '<div style="\nbackground:linear-gradient(135deg,#FFFFFF,#F8FAFC);\npadding:28px 32px;\nborder-radius:16px;\nborder-left:8px solid #EEF4FB;\nbox-shadow:0 4px 16px rgba(0,0,0,.08);\n">\n    <div style="\n    color:#0F172A;\n    font-size:23px;\n    font-weight:700;\n    text-align:center;\n    margin-bottom:8px;">\n        Bathroom Tissue\n    </div>',
        },
        {
          type: "checkbox",
          name: "Jenis BT",
          title:
            "Apa saja jenis Bathroom Tissue Suparma yang dibeli atau digunakan oleh perusahaan Anda selama 1 tahun terakhir?",
          isRequired: true,
          errorLocation: "bottom",
          choices: [
            {
              value: "1",
              text: "BT Embossed - Singlepack",
            },
            {
              value: "2",
              text: "BT Embossed - Multipack",
            },
            {
              value: "3",
              text: "BT Embossed - Paperwrap",
            },
            {
              value: "4",
              text: "BT Non Embossed - Singlepack",
            },
            {
              value: "5",
              text: "BT Non Embossed - Multipack",
            },
            {
              value: "6",
              text: "BT Non Embossed - Paperwrap",
            },
            {
              value: "7",
              text: "Bathroom Multipurpose Tissue",
            },
            {
              value: "8",
              text: "Bathroom Jumbo Roll Tissue",
            },
          ],
        },
        {
          type: "matrixdropdown",
          name: "Needs BT",
          visibleIf: "{Ordered Tissue (Procurement)} anyof ['Item 2']",
          title:
            "Pilih opsi yang paling sesuai untuk menggambarkan aktivitas pembelian Bathroom Tissue di perusahaan Anda selama 1 tahun terakhir.",
          isRequired: true,
          errorLocation: "bottom",
          columns: [
            {
              name: "BT - Purchase Frequency",
              title: "Frekuensi Order",
              cellType: "dropdown",
              isRequired: true,
              choices: [
                {
                  value: 2,
                  text: "Kurang dari 1 bulan sekali",
                },
                {
                  value: 3,
                  text: "1 bulan sekali",
                },
                {
                  value: 4,
                  text: "2 bulan sekali",
                },
                {
                  value: 5,
                  text: "3 bulan sekali",
                },
                {
                  value: 6,
                  text: "lebih dari 3 bulan sekali",
                },
              ],
              storeOthersAsComment: true,
            },
            {
              name: "BT - Vol per Purchase",
              title: "Volume per Order",
              cellType: "dropdown",
              isRequired: true,
              choices: [
                {
                  value: 1,
                  text: "≤ 10 karton",
                },
                {
                  value: 2,
                  text: "11–50 karton",
                },
                {
                  value: 3,
                  text: "51–100 karton",
                },
                {
                  value: 4,
                  text: "101–300 karton",
                },
                {
                  value: 5,
                  text: "> 300 karton",
                },
              ],
              storeOthersAsComment: true,
            },
            {
              name: "BT - Supplier",
              title: "Semua Merek yang Digunakan",
              cellType: "tagbox",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "See U",
                },
                {
                  value: "2",
                  text: "Plenty",
                },
                {
                  value: "3",
                  text: "Paseo",
                },
                {
                  value: "4",
                  text: "Nice",
                },
                {
                  value: "5",
                  text: "Tessa",
                },
                {
                  value: "6",
                  text: "Livi",
                },
                {
                  value: "7",
                  text: "Montiss",
                },
                {
                  value: "8",
                  text: "Jolly",
                },
              ],
              showOtherItem: true,
              noneText: "Tidak Ada",
              otherText: "Lainnya",
              storeOthersAsComment: true,
              selectAllText: "See U",
            },
            {
              name: "BT - Price Comp",
              title: "Harga Suparma Dibandingkan Merek Lain",
              cellType: "dropdown",
              isRequired: true,
              choices: [
                {
                  value: 1,
                  text: "Tidak Bersaing",
                },
                {
                  value: 2,
                  text: "Kurang Bersaing",
                },
                {
                  value: 3,
                  text: "Cukup Bersaing",
                },
                {
                  value: 4,
                  text: "Bersaing",
                },
                {
                  value: 5,
                  text: "Sangat Bersaing",
                },
              ],
              storeOthersAsComment: true,
            },
          ],
          cellErrorLocation: "bottom",
          choices: [1, 2, 3, 4, 5],
          rows: [
            {
              value: "1",
              text: "BT Embossed - Singlepack",
              visibleIf: "{Jenis BT} anyof [1]",
            },
            {
              value: "2",
              text: "BT Embossed - Multipack",
              visibleIf: "{Jenis BT} anyof [2]",
            },
            {
              value: "3",
              text: "BT Embossed - Paperwrap",
              visibleIf: "{Jenis BT} anyof [3]",
            },
            {
              value: "4",
              text: "BT Non Embossed - Singlepack",
              visibleIf: "{Jenis BT} anyof [4]",
            },
            {
              value: "5",
              text: "BT Non Embossed - Multipack",
              visibleIf: "{Jenis BT} anyof [5]",
            },
            {
              value: "6",
              text: "BT Non Embossed - Paperwrap",
              visibleIf: "{Jenis BT} anyof [6]",
            },
            {
              value: "7",
              text: "Bathroom Multipurpose Tissue",
              visibleIf: "{Jenis BT} anyof [7]",
            },
            {
              value: "8",
              text: "Bathroom Jumbo Roll Tissue",
              visibleIf: "{Jenis BT} anyof [8]",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "BT - Penggunaan DM",
          visibleIf: "{Peran Responden} anyof ['Item 1', 'Item 3']",
          title:
            "Apakah Anda pernah menggunakan secara langsung produk Bathroom Tissue Suparma (Plenty & See U)?",
          isRequired: true,
          choices: [
            {
              value: "Item 1",
              text: "Ya, pernah menggunakan",
            },
            {
              value: "Item 2",
              text: "Tidak pernah",
            },
          ],
        },
        {
          type: "html",
          name: "question72",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 2'] or {BT - Penggunaan DM} anyof ['Item 1']",
          html: '<div style="\nbackground:#EEF4FB;\npadding:14px 24px;\nborder-radius:12px;\nmargin-top:10px;\ntext-align:center;\n">\n    <span style="\n    color:#1E293B;\n    font-size:20px;\n    font-weight:700;">\n         Kualitas Produk\n    </span>\n</div>',
        },
        {
          type: "rating",
          name: "BT - Tekstur",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 2'] or {BT - Penggunaan DM} anyof ['Item 1']",
          title:
            "Bagaimana TEKSTUR Bathroom Tissue Suparma saat bersentuhan dengan kulit Anda?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat kasar",
            },
            {
              value: "2",
              text: "Kasar",
            },
            {
              value: "3",
              text: "Agak kasar",
            },
            {
              value: "4",
              text: "Agak lembut",
            },
            {
              value: "5",
              text: "Lembut",
            },
            {
              value: "6",
              text: "Sangat lembut",
            },
          ],
          minRateDescription: "Sangat Kasar",
          maxRateDescription: "Sangat Lembut",
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "BT - Kekuatan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 2'] or {BT - Penggunaan DM} anyof ['Item 1']",
          startWithNewLine: false,
          title: "Bagaimana KEKUATAN Bathroom Tissue Suparma saat basah?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat mudah hancur",
            },
            {
              value: "2",
              text: "Mudah hancur",
            },
            {
              value: "3",
              text: "Agak mudah hancur",
            },
            {
              value: "4",
              text: "Agak kuat",
            },
            {
              value: "5",
              text: "Kuat",
            },
            {
              value: "6",
              text: "Sangat kuat",
            },
          ],
          minRateDescription: "Sangat Mudah Robek",
          maxRateDescription: "Sangat Kuat",
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "BT - Kebersihan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 2'] or {BT - Penggunaan DM} anyof ['Item 1']",
          title: "Bagaimana KEBERSIHAN Bathroom Tissue Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat banyak serat, debu, atau noda",
            },
            {
              value: "2",
              text: "Banyak serat, debu, atau noda",
            },
            {
              value: "3",
              text: "Agak banyak serat, debu, atau noda",
            },
            {
              value: "4",
              text: "Agak bersih",
            },
            {
              value: "5",
              text: "Bersih",
            },
            {
              value: "6",
              text: "Sangat bersih",
            },
          ],
          minRateDescription: {
            default: "Banyak Noda",
            id: "Sangat Banyak Noda",
          },
          maxRateDescription: "Sangat Bersih",
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "BT - Ukuran",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 2'] or {BT - Penggunaan DM} anyof ['Item 1']",
          startWithNewLine: false,
          title: "Bagaimana UKURAN LEMBAR Bathroom Tissue Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat kecil",
            },
            {
              value: "2",
              text: "Kecil",
            },
            {
              value: "3",
              text: "Cukup kecil",
            },
            {
              value: "4",
              text: "Cukup lebar",
            },
            {
              value: "5",
              text: "Lebar",
            },
            {
              value: "6",
              text: "Sangat lebar",
            },
          ],
          minRateDescription: "Sangat Kecil",
          maxRateDescription: "Sangat Lebar",
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "BT - Desain",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 2'] or {BT - Penggunaan DM} anyof ['Item 1']",
          title: "Bagaimana DESAIN KEMASAN Bathroom Tissue Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: "1",
              text: "Tidak menarik",
            },
            {
              value: "2",
              text: "Kurang menarik",
            },
            {
              value: "3",
              text: "Biasa saja",
            },
            {
              value: "4",
              text: "Menarik",
            },
            {
              value: "5",
              text: "Sangat menarik",
            },
          ],
          minRateDescription: "Tidak Menarik",
          maxRateDescription: "Sangat Menarik",
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "BT - Kualitas Kemasan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 2'] or {BT - Penggunaan DM} anyof ['Item 1']",
          startWithNewLine: false,
          title: "Bagaimana KUALITAS KEMASAN Bathroom Tissue Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: "1",
              text: "Sangat buruk",
            },
            {
              value: "2",
              text: "Buruk",
            },
            {
              value: "3",
              text: "Biasa saja",
            },
            {
              value: "4",
              text: "Baik",
            },
            {
              value: "5",
              text: "Sangat baik",
            },
          ],
          minRateDescription: "Sangat Buruk",
          maxRateDescription: "Sangat Baik",
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "BT Overall Satisfaction",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 2'] or {BT - Penggunaan DM} anyof ['Item 1']",
          title:
            "Secara keseluruhan, bagaimana penilaian Anda terhadap produk Bathroom Tissue Suparma?",
          rateType: "smileys",
          minRateDescription: "Tidak Memuaskan",
          maxRateDescription: "Sangat Memuaskan",
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "html",
          name: "Title9",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 2'] or {BT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          html: '<div style="\nbackground:#EEF4FB;\npadding:14px 24px;\nborder-radius:12px;\nmargin-top:10px;\ntext-align:center;\n">\n    <span style="\n    color:#1E293B;\n    font-size:20px;\n    font-weight:700;">\n         Preferensi Produk\n    </span>\n</div>',
        },
        {
          type: "ranking",
          name: "BT - Rank",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 2'] or {BT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Mohon urutkan aspek-aspek berikut berdasarkan tingkat kepentingannya bagi perusahaan Anda dalam memilih produk Bathroom Tissue",
          description:
            "Drag & drop untuk mengurutkan atribut dari yang paling penting",
          isRequired: true,
          errorLocation: "bottom",
          choices: [
            {
              value: "1",
              text: "Kelembutan",
            },
            {
              value: "2",
              text: "Kekuatan",
            },
            {
              value: "3",
              text: "Kebersihan",
            },
            {
              value: "6",
              text: "Ukuran",
            },
            {
              value: "10",
              text: "Jumlah Lembar",
            },
            {
              value: "7",
              text: "Desain Kemasan",
            },
          ],
        },
        {
          type: "checkbox",
          name: "BT - Keunggulan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 2'] or {BT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          startWithNewLine: false,
          title:
            "Menurut Anda, apa saja keunggulan utama Bathroom Tissue Suparma dibandingkan dengan produk dari supplier lain?",
          description: "Pilih maksimal 3 opsi",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Kelembutan",
            },
            {
              value: "2",
              text: "Kekuatan",
            },
            {
              value: "3",
              text: "Kebersihan",
            },
            {
              value: "4",
              text: "Ukuran",
            },
            {
              value: "5",
              text: "Jumlah Lembar",
            },
            {
              value: "7",
              text: "Desain Kemasan",
            },
          ],
          maxSelectedChoices: 3,
        },
        {
          type: "boolean",
          name: "BT - Preferensi Tekstur",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 2'] or {BT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Karakteristik Bathroom Tissue seperti apa yang paling sesuai dengan kebutuhan operasional Anda?  ",
          isRequired: true,
          labelTrue: "Sangat Kuat",
          labelFalse: "Sangat Lembut",
        },
        {
          type: "boolean",
          name: "BT - Preferensi Permukaan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 2'] or {BT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Permukaan Bathroom Tissue seperti apa yang paling sesuai dengan kebutuhan operasional Anda? ",
          isRequired: true,
          labelTrue: "Non-Embossed",
          labelFalse: "Embossed",
        },
        {
          type: "boolean",
          name: "BT - Preferensi Daya Serap",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 2'] or {BT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Saat terkena air atau cairan, karakteristik Bathroom Tissue seperti apa yang paling sesuai dengan kebutuhan operasional Anda? ",
          isRequired: true,
          labelTrue: "Tidak Mudah Sobek",
          labelFalse: "Mudah Terurai (Septic Safe)",
        },
        {
          type: "boolean",
          name: "BT - Preferensi Bentuk",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 2'] or {BT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Ukuran Bathroom Tissue seperti apa yang paling sesuai dengan kebutuhan operasional Anda?",
          isRequired: true,
          labelTrue: "Roll Panjang & Ekonomis",
          labelFalse: "Roll Pendek & Tebal",
        },
        {
          type: "boolean",
          name: "BT - Preferensi Aroma",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 2'] or {BT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Aroma Bathroom Tissue seperti apa yang lebih Anda pilih untuk kebutuhan operasional?",
          isRequired: true,
          labelTrue: "Beraroma Wangi",
          labelFalse: "Tidak Beraroma",
        },
        {
          type: "radiogroup",
          name: "BT - Preferensi Kemasan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 2'] or {BT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Jenis kemasan Bathroom Tissue seperti apa yang paling sesuai dengan kebutuhan perusahaan Anda?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Kemasan plastik konvensional",
            },
            {
              value: "2",
              text: "Kemasan plastik ramah lingkungan (biodegradable)",
            },
            {
              value: "3",
              text: "Kemasan kardus atau kertas (paper-based)",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "BT - Preferensi Dispencer",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 2'] or {BT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          startWithNewLine: false,
          title:
            "Apakah perusahaan Anda tertarik untuk menggunakan wadah atau dispenser Bathroom Tissue yang disediakan oleh Suparma?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Ya, sudah menggunakan",
            },
            {
              value: "2",
              text: "Ya, ingin menggunakan",
            },
            {
              value: "3",
              text: "Tidak, belum membutuhkan",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "BT - Switching Behaviour",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 2'] or {BT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Jika ada supplier lain yang menawarkan Bathroom Tissue dengan kualitas relatif setara dan harga 5% lebih murah, langkah apa yang paling mungkin dilakukan perusahaan Anda?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Tetap menggunakan Suparma",
            },
            {
              value: "2",
              text: "Mengalihkan sebagian pembelian",
            },
            {
              value: "3",
              text: "Beralih sepenuhnya ke supplier lain",
            },
          ],
        },
      ],
    },
    {
      name: "Hand Towel",
      visibleIf:
        "{Ordered Tissue (Procurement)} anyof ['Item 3'] or {Used Tissue (End User)} anyof ['Item 3']",
      elements: [
        {
          type: "html",
          name: "Header8",
          html: '<div style="\nmargin:-38px -40px 30px -40px;\noverflow:hidden;\n">\n\n<img\nsrc="https://api.surveyjs.io/private/Surveys/files?name=3a24c14a-303e-43d6-8cb0-2f88ee3ea054"\nstyle="\nwidth:100%;\ndisplay:block;\nborder-radius:0;\n">\n</div>',
        },
        {
          type: "html",
          name: "question3",
          html: '<div style="\nbackground:linear-gradient(135deg,#FFFFFF,#F8FAFC);\npadding:28px 32px;\nborder-radius:16px;\nborder-left:8px solid #EEF4FB;\nbox-shadow:0 4px 16px rgba(0,0,0,.08);\n">\n    <div style="\n    color:#0F172A;\n    font-size:23px;\n    font-weight:700;\n    text-align:center;\n    margin-bottom:8px;">\n        Hand Towel\n    </div>',
        },
        {
          type: "checkbox",
          name: "Jenis HT",
          title:
            "Apa saja jenis Hand Towel Suparma yang dibeli atau digunakan oleh perusahaan Anda selama 1 tahun terakhir?",
          isRequired: true,
          errorLocation: "bottom",
          choices: [
            {
              value: "1",
              text: "Hand Towel 1 Ply - Sleevepack",
            },
            {
              value: "2",
              text: "Hand Towel 1 Ply - Fullpack",
            },
            {
              value: "3",
              text: "Hand Towel Interfold",
            },
            {
              value: "4",
              text: "Hand Roll Towel",
            },
          ],
        },
        {
          type: "matrixdropdown",
          name: "Needs HT",
          visibleIf: "{Ordered Tissue (Procurement)} anyof ['Item 3']",
          title:
            "Pilih opsi yang paling sesuai untuk menggambarkan aktivitas pembelian Hand Towel di perusahaan Anda selama 1 tahun terakhir.",
          isRequired: true,
          errorLocation: "bottom",
          columns: [
            {
              name: "HT - Purchase Frequency",
              title: "Frekuensi Order",
              cellType: "dropdown",
              isRequired: true,
              choices: [
                {
                  value: 2,
                  text: "Kurang dari 1 bulan sekali",
                },
                {
                  value: 3,
                  text: "1 bulan sekali",
                },
                {
                  value: 4,
                  text: "2 bulan sekali",
                },
                {
                  value: 5,
                  text: "3 bulan sekali",
                },
                {
                  value: 6,
                  text: "lebih dari 3 bulan sekali",
                },
              ],
              storeOthersAsComment: true,
            },
            {
              name: "HT - Vol per Purchase",
              title: "Volume per Order",
              cellType: "dropdown",
              isRequired: true,
              choices: [
                {
                  value: 1,
                  text: "≤ 10 karton",
                },
                {
                  value: 2,
                  text: "11–50 karton",
                },
                {
                  value: 3,
                  text: "51–100 karton",
                },
                {
                  value: 4,
                  text: "101–300 karton",
                },
                {
                  value: 5,
                  text: "> 300 karton",
                },
              ],
              storeOthersAsComment: true,
            },
            {
              name: "HT - Supplier",
              title: "Semua Merek yang Digunakan",
              cellType: "tagbox",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "See U",
                },
                {
                  value: "2",
                  text: "Plenty",
                },
                {
                  value: "3",
                  text: "Paseo",
                },
                {
                  value: "4",
                  text: "Nice",
                },
                {
                  value: "5",
                  text: "Tessa",
                },
                {
                  value: "6",
                  text: "Livi",
                },
                {
                  value: "7",
                  text: "Montiss",
                },
                {
                  value: "8",
                  text: "Jolly",
                },
              ],
              showOtherItem: true,
              noneText: "Tidak Ada",
              otherText: "Lainnya",
              storeOthersAsComment: true,
              selectAllText: "See U",
            },
            {
              name: "HT - Price Comp",
              title: "Harga Suparma Dibandingkan Merek Lain",
              cellType: "dropdown",
              isRequired: true,
              choices: [
                {
                  value: 1,
                  text: "Tidak Bersaing",
                },
                {
                  value: 2,
                  text: "Kurang Bersaing",
                },
                {
                  value: 3,
                  text: "Cukup Bersaing",
                },
                {
                  value: 4,
                  text: "Bersaing",
                },
                {
                  value: 5,
                  text: "Sangat Bersaing",
                },
              ],
              storeOthersAsComment: true,
            },
          ],
          cellErrorLocation: "bottom",
          choices: [1, 2, 3, 4, 5],
          rows: [
            {
              value: "1",
              text: "Hand Towel 1 Ply - Sleevepack",
              visibleIf: "{Jenis HT} anyof [1]",
            },
            {
              value: "2",
              text: "Hand Towel 1 Ply - Fullpack",
              visibleIf: "{Jenis HT} anyof [2]",
            },
            {
              value: "3",
              text: "Hand Towel Interfold",
              visibleIf: "{Jenis HT} anyof [3]",
            },
            {
              value: "4",
              text: "Hand Roll Towel",
              visibleIf: "{Jenis HT} anyof [4]",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "HT - Penggunaan DM",
          visibleIf: "{Peran Responden} anyof ['Item 1', 'Item 3']",
          title:
            "Apakah Anda pernah menggunakan secara langsung produk Hand Towel Suparma (Plenty & See U)?",
          isRequired: true,
          choices: [
            {
              value: "Item 1",
              text: "Ya, pernah menggunakan",
            },
            {
              value: "Item 2",
              text: "Tidak pernah",
            },
          ],
        },
        {
          type: "html",
          name: "Title10",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 3'] or {HT - Penggunaan DM} anyof ['Item 1']",
          html: '<div style="\nbackground:#EEF4FB;\npadding:14px 24px;\nborder-radius:12px;\nmargin-top:10px;\ntext-align:center;\n">\n    <span style="\n    color:#1E293B;\n    font-size:20px;\n    font-weight:700;">\n         Kualitas Produk\n    </span>\n</div>',
        },
        {
          type: "rating",
          name: "HT - Daya Serap",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 3'] or {HT - Penggunaan DM} anyof ['Item 1']",
          title:
            "Bagaimana DAYA SERAP Hand Towel  Suparma saat digunakan untuk mengelap cairan?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat sulit menyerap",
            },
            {
              value: "2",
              text: "Sulit menyerap",
            },
            {
              value: "3",
              text: "Cukup sulit menyerap",
            },
            {
              value: "4",
              text: "Cukup menyerap",
            },
            {
              value: "5",
              text: "Mudah menyerap",
            },
            {
              value: "6",
              text: "Sangat mudah menyerap",
            },
          ],
          minRateDescription: {
            id: "Sangat Sulit Menyerap",
          },
          maxRateDescription: {
            id: "Sangat Mudah Menyerap",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "HT - Kekuatan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 3'] or {HT - Penggunaan DM} anyof ['Item 1']",
          startWithNewLine: false,
          title: "Bagaimana KEKUATAN Hand Towel  Suparma saat basah?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat mudah hancur",
            },
            {
              value: "2",
              text: "Mudah hancur",
            },
            {
              value: "3",
              text: "Agak mudah hancur",
            },
            {
              value: "4",
              text: "Agak kuat",
            },
            {
              value: "5",
              text: "Kuat",
            },
            {
              value: "6",
              text: "Sangat kuat",
            },
          ],
          minRateDescription: {
            id: "Sangat Mudah Hancur",
          },
          maxRateDescription: {
            id: "Sangat Menyerap",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "HT - Ketebalan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 3'] or {HT - Penggunaan DM} anyof ['Item 1']",
          title: "Bagaimana KETEBALAN Hand Towel Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat tipis",
            },
            {
              value: "2",
              text: "Tipis",
            },
            {
              value: "3",
              text: "Cukup tipis",
            },
            {
              value: "4",
              text: "Cukup tebal",
            },
            {
              value: "5",
              text: "Tebal",
            },
            {
              value: "6",
              text: "Sangat tebal",
            },
          ],
          minRateDescription: {
            id: "Sangat Tipis",
          },
          maxRateDescription: {
            id: "Sangat Tebal",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "HT - Ukuran",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 3'] or {HT - Penggunaan DM} anyof ['Item 1']",
          startWithNewLine: false,
          title: "Bagaimana UKURAN LEMBAR Hand Towel Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat kecil",
            },
            {
              value: "2",
              text: "Kecil",
            },
            {
              value: "3",
              text: "Cukup kecil",
            },
            {
              value: "4",
              text: "Cukup lebar",
            },
            {
              value: "5",
              text: "Lebar",
            },
            {
              value: "6",
              text: "Sangat lebar",
            },
          ],
          minRateDescription: {
            id: "Sangat Kecil",
          },
          maxRateDescription: {
            id: "Sangat Lebar",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "HT - Desain",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 3'] or {HT - Penggunaan DM} anyof ['Item 1']",
          title: "Bagaimana DESAIN KEMASAN Hand Towel Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: "1",
              text: "Tidak menarik",
            },
            {
              value: "2",
              text: "Kurang menarik",
            },
            {
              value: "3",
              text: "Biasa saja",
            },
            {
              value: "4",
              text: "Menarik",
            },
            {
              value: "5",
              text: "Sangat menarik",
            },
          ],
          minRateDescription: {
            id: "Tidak Menarik",
          },
          maxRateDescription: {
            id: "Sangat Menarik",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "HT - Material Kemasan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 3'] or {HT - Penggunaan DM} anyof ['Item 1']",
          startWithNewLine: false,
          title: "Bagaimana KUALITAS KEMASAN Hand Towel Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: "1",
              text: "Sangat buruk",
            },
            {
              value: "2",
              text: "Buruk",
            },
            {
              value: "3",
              text: "Biasa saja",
            },
            {
              value: "4",
              text: "Baik",
            },
            {
              value: "5",
              text: "Sangat baik",
            },
          ],
          minRateDescription: {
            id: "Sangat Buruk",
          },
          maxRateDescription: {
            id: "Sangat Baik",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "HT Overall Satisfaction",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 3'] or {HT - Penggunaan DM} anyof ['Item 1']",
          title:
            "Secara keseluruhan, bagaimana penilaian Anda terhadap produk Hand Towel Suparma?",
          rateType: "smileys",
          minRateDescription: "Tidak Memuaskan",
          maxRateDescription: "Sangat Memuaskan",
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "html",
          name: "Title11",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 3'] or {HT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          html: '<div style="\nbackground:#EEF4FB;\npadding:14px 24px;\nborder-radius:12px;\nmargin-top:10px;\ntext-align:center;\n">\n    <span style="\n    color:#1E293B;\n    font-size:20px;\n    font-weight:700;">\n         Preferensi Produk\n    </span>\n</div>',
        },
        {
          type: "ranking",
          name: "HT - Rank",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 3'] or {HT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Mohon urutkan aspek-aspek berikut berdasarkan tingkat kepentingannya bagi perusahaan Anda dalam memilih produk Hand Towel",
          description:
            "Drag & drop untuk mengurutkan atribut dari yang paling penting",
          isRequired: true,
          errorLocation: "bottom",
          choices: [
            {
              value: "1",
              text: "Kekuatan",
            },
            {
              value: "2",
              text: "Daya Serap",
            },
            {
              value: "3",
              text: "Ketebalan",
            },
            {
              value: "4",
              text: "Ukuran",
            },
            {
              value: "5",
              text: "Desain Kemasan",
            },
          ],
        },
        {
          type: "checkbox",
          name: "HT - Keunggulan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 3'] or {HT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          startWithNewLine: false,
          title:
            "Menurut Anda, apa saja keunggulan utama Hand Towel Suparma dibandingkan dengan produk dari supplier lain?",
          description: "Pilih maksimal 3 opsi",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Kekuatan",
            },
            {
              value: "2",
              text: "Daya Serap",
            },
            {
              value: "3",
              text: "Ketebalan",
            },
            {
              value: "4",
              text: "Ukuran",
            },
            {
              value: "5",
              text: "Desain Kemasan",
            },
          ],
          maxSelectedChoices: 3,
        },
        {
          type: "boolean",
          name: "HT - Preferensi Daya Serap",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 3'] or {HT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Saat terkena air atau cairan, karakteristik Hand Towel seperti apa yang paling sesuai dengan kebutuhan operasional Anda?",
          isRequired: true,
          labelTrue: "Kuat Saat Basah",
          labelFalse: "Mudah Menyerap",
        },
        {
          type: "boolean",
          name: "HT - Preferensi Tekstur",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 3'] or {HT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Permukaan Hand Towel seperti apa yang paling sesuai dengan kebutuhan operasional Anda?",
          isRequired: true,
          labelTrue: "Bertekstur (Embossed)",
          labelFalse: "Halus",
        },
        {
          type: "boolean",
          name: "HT - Preferensi Aroma",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 3'] or {HT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Aroma Hand Towel seperti apa yang lebih Anda pilih untuk kebutuhan operasional?  ",
          isRequired: true,
          labelTrue: "Beraroma Wangi",
          labelFalse: "Tidak Beraroma",
        },
        {
          type: "radiogroup",
          name: "HT - Preferensi Kemasan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 3'] or {HT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Jenis kemasan Hand Towel seperti apa yang paling sesuai dengan kebutuhan perusahaan Anda?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Kemasan plastik konvensional",
            },
            {
              value: "2",
              text: "Kemasan plastik ramah lingkungan (biodegradable)",
            },
            {
              value: "3",
              text: "Kemasan kardus atau kertas (paper-based)",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "HT - Preferensi Dispencer",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 3'] or {HT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          startWithNewLine: false,
          title:
            "Apakah perusahaan Anda tertarik untuk menggunakan wadah atau dispenser Hand Towel yang disediakan oleh Suparma?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Ya, sudah menggunakan",
            },
            {
              value: "2",
              text: "Ya, ingin menggunakan",
            },
            {
              value: "3",
              text: "Tidak, belum membutuhkan",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "HT - Switching Behaviour",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 3'] or {HT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Jika ada supplier lain yang menawarkan Hand Towel dengan kualitas relatif setara dan harga 5% lebih murah, langkah apa yang paling mungkin dilakukan perusahaan Anda?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Tetap menggunakan Suparma",
            },
            {
              value: "2",
              text: "Mengalihkan sebagian pembelian",
            },
            {
              value: "3",
              text: "Beralih sepenuhnya ke supplier lain",
            },
          ],
        },
      ],
    },
    {
      name: "Kitchen Towel",
      visibleIf:
        "{Ordered Tissue (Procurement)} anyof ['Item 4'] or {Used Tissue (End User)} anyof ['Item 4']",
      elements: [
        {
          type: "html",
          name: "Header11",
          html: '<div style="\nmargin:-38px -40px 30px -40px;\noverflow:hidden;\n">\n\n<img\nsrc="https://api.surveyjs.io/private/Surveys/files?name=3a24c14a-303e-43d6-8cb0-2f88ee3ea054"\nstyle="\nwidth:100%;\ndisplay:block;\nborder-radius:0;\n">\n</div>',
        },
        {
          type: "html",
          name: "question4",
          html: '<div style="\nbackground:linear-gradient(135deg,#FFFFFF,#F8FAFC);\npadding:28px 32px;\nborder-radius:16px;\nborder-left:8px solid #EEF4FB;\nbox-shadow:0 4px 16px rgba(0,0,0,.08);\n">\n    <div style="\n    color:#0F172A;\n    font-size:23px;\n    font-weight:700;\n    text-align:center;\n    margin-bottom:8px;">\n        Kitchen Towel\n    </div>',
        },
        {
          type: "checkbox",
          name: "Jenis KT",
          title:
            "Apa saja jenis Kitchen Towel Suparma yang dibeli atau digunakan oleh perusahaan Anda selama 1 tahun terakhir?",
          choices: [
            {
              value: "1",
              text: "Kitchen Towel - Plastic Wrap",
            },
            {
              value: "2",
              text: "Kitchen Towel - Paper Wrap",
            },
          ],
        },
        {
          type: "matrixdropdown",
          name: "Needs KT",
          visibleIf: "{Ordered Tissue (Procurement)} anyof ['Item 4']",
          title:
            "Pilih opsi yang paling sesuai untuk menggambarkan aktivitas pembelian Kitchen Towel di perusahaan Anda selama 1 tahun terakhir.",
          isRequired: true,
          errorLocation: "bottom",
          columns: [
            {
              name: "KT - Purchase Frequency",
              title: "Frekuensi Order",
              cellType: "dropdown",
              isRequired: true,
              choices: [
                {
                  value: 2,
                  text: "Kurang dari 1 bulan sekali",
                },
                {
                  value: 3,
                  text: "1 bulan sekali",
                },
                {
                  value: 4,
                  text: "2 bulan sekali",
                },
                {
                  value: 5,
                  text: "3 bulan sekali",
                },
                {
                  value: 6,
                  text: "lebih dari 3 bulan sekali",
                },
              ],
              storeOthersAsComment: true,
            },
            {
              name: "KT - Vol per Purchase",
              title: "Volume per Order",
              cellType: "dropdown",
              isRequired: true,
              choices: [
                {
                  value: 1,
                  text: "≤ 10 karton",
                },
                {
                  value: 2,
                  text: "11–50 karton",
                },
                {
                  value: 3,
                  text: "51–100 karton",
                },
                {
                  value: 4,
                  text: "101–300 karton",
                },
                {
                  value: 5,
                  text: "> 300 karton",
                },
              ],
              storeOthersAsComment: true,
            },
            {
              name: "KT - Supplier",
              title: "Semua Merek yang Digunakan",
              cellType: "tagbox",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "See U",
                },
                {
                  value: "2",
                  text: "Plenty",
                },
                {
                  value: "3",
                  text: "Paseo",
                },
                {
                  value: "4",
                  text: "Nice",
                },
                {
                  value: "5",
                  text: "Tessa",
                },
                {
                  value: "6",
                  text: "Livi",
                },
                {
                  value: "7",
                  text: "Montiss",
                },
                {
                  value: "8",
                  text: "Jolly",
                },
              ],
              showOtherItem: true,
              noneText: "Tidak Ada",
              otherText: "Lainnya",
              storeOthersAsComment: true,
              selectAllText: "See U",
            },
            {
              name: "KT - Price Comp",
              title: "Harga Suparma Dibandingkan Merek Lain",
              cellType: "dropdown",
              isRequired: true,
              choices: [
                {
                  value: 1,
                  text: "Tidak Bersaing",
                },
                {
                  value: 2,
                  text: "Kurang Bersaing",
                },
                {
                  value: 3,
                  text: "Cukup Bersaing",
                },
                {
                  value: 4,
                  text: "Bersaing",
                },
                {
                  value: 5,
                  text: "Sangat Bersaing",
                },
              ],
              storeOthersAsComment: true,
            },
          ],
          cellErrorLocation: "bottom",
          choices: [1, 2, 3, 4, 5],
          rows: [
            {
              value: "1",
              text: "Kitchen Towel - Plastic Wrap",
              visibleIf: "{Jenis KT} anyof [1]",
            },
            {
              value: "2",
              text: "Kitchen Towel - Paper Wrap",
              visibleIf: "{Jenis KT} anyof [2]",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "KT - Penggunaan DM",
          visibleIf: "{Peran Responden} anyof ['Item 1', 'Item 3']",
          title:
            "Apakah Anda pernah menggunakan secara langsung produk Kitchen Towel Suparma (Plenty & See U)?",
          isRequired: true,
          choices: [
            {
              value: "Item 1",
              text: "Ya, pernah menggunakan",
            },
            {
              value: "Item 2",
              text: "Tidak pernah",
            },
          ],
        },
        {
          type: "html",
          name: "Title12",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 4'] or {KT - Penggunaan DM} anyof ['Item 1']",
          html: '<div style="\nbackground:#EEF4FB;\npadding:14px 24px;\nborder-radius:12px;\nmargin-top:10px;\ntext-align:center;\n">\n    <span style="\n    color:#1E293B;\n    font-size:20px;\n    font-weight:700;">\n         Kualitas Produk\n    </span>\n</div>',
        },
        {
          type: "rating",
          name: "KT - Daya Serap",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 4'] or {KT - Penggunaan DM} anyof ['Item 1']",
          title:
            "Bagaimana DAYA SERAP Kitchen Towel  Suparma saat digunakan untuk mengelap cairan & minyak?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat sulit menyerap",
            },
            {
              value: "2",
              text: "Sulit menyerap",
            },
            {
              value: "3",
              text: "Cukup sulit menyerap",
            },
            {
              value: "4",
              text: "Cukup menyerap",
            },
            {
              value: "5",
              text: "Mudah menyerap",
            },
            {
              value: "6",
              text: "Sangat mudah menyerap",
            },
          ],
          minRateDescription: {
            id: "Sangat Sulit Menyerap",
          },
          maxRateDescription: {
            id: "Sangat Mudah Menyerap",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "KT - Kekuatan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 4'] or {KT - Penggunaan DM} anyof ['Item 1']",
          startWithNewLine: false,
          title: "Bagaimana KEKUATAN Kitchen Towel  Suparma saat digunakan?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat mudah hancur",
            },
            {
              value: "2",
              text: "Mudah hancur",
            },
            {
              value: "3",
              text: "Agak mudah hancur",
            },
            {
              value: "4",
              text: "Agak kuat",
            },
            {
              value: "5",
              text: "Kuat",
            },
            {
              value: "6",
              text: "Sangat kuat",
            },
          ],
          minRateDescription: {
            id: "Sangat Mudah Robek",
          },
          maxRateDescription: {
            id: "Sangat Kuat",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "KT - Ketebalan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 4'] or {KT - Penggunaan DM} anyof ['Item 1']",
          title: "Bagaimana KETEBALAN Kitchen Towel Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat tipis",
            },
            {
              value: "2",
              text: "Tipis",
            },
            {
              value: "3",
              text: "Cukup tipis",
            },
            {
              value: "4",
              text: "Cukup tebal",
            },
            {
              value: "5",
              text: "Tebal",
            },
            {
              value: "6",
              text: "Sangat tebal",
            },
          ],
          minRateDescription: {
            id: "Sangat Tipis",
          },
          maxRateDescription: {
            id: "Sangat Tebal",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "KT - Ukuran",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 4'] or {KT - Penggunaan DM} anyof ['Item 1']",
          startWithNewLine: false,
          title: "Bagaimana UKURAN LEMBAR Kitchen Towel Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat kecil",
            },
            {
              value: "2",
              text: "Kecil",
            },
            {
              value: "3",
              text: "Cukup kecil",
            },
            {
              value: "4",
              text: "Cukup lebar",
            },
            {
              value: "5",
              text: "Lebar",
            },
            {
              value: "6",
              text: "Sangat lebar",
            },
          ],
          minRateDescription: {
            id: "Sangat Kecil",
          },
          maxRateDescription: {
            id: "Sangat Lebar",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "KT - Desain",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 4'] or {KT - Penggunaan DM} anyof ['Item 1']",
          title: "Bagaimana DESAIN KEMASAN Kitchen Towel Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: "1",
              text: "Tidak menarik",
            },
            {
              value: "2",
              text: "Kurang menarik",
            },
            {
              value: "3",
              text: "Biasa saja",
            },
            {
              value: "4",
              text: "Menarik",
            },
            {
              value: "5",
              text: "Sangat menarik",
            },
          ],
          minRateDescription: {
            id: "Tidak Menarik",
          },
          maxRateDescription: {
            id: "Sangat Menarik",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "KT - Material",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 4'] or {KT - Penggunaan DM} anyof ['Item 1']",
          startWithNewLine: false,
          title: "Bagaimana KUALITAS KEMASAN Kitchen Towel Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: "1",
              text: "Sangat buruk",
            },
            {
              value: "2",
              text: "Buruk",
            },
            {
              value: "3",
              text: "Biasa saja",
            },
            {
              value: "4",
              text: "Baik",
            },
            {
              value: "5",
              text: "Sangat baik",
            },
          ],
          minRateDescription: {
            id: "Sangat Buruk",
          },
          maxRateDescription: {
            id: "Sangat Baik",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "KT Overall Satisfaction",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 4'] or {KT - Penggunaan DM} anyof ['Item 1']",
          title:
            "Secara keseluruhan, bagaimana penilaian Anda terhadap produk Kitchen Towel Suparma?",
          rateType: "smileys",
          minRateDescription: "Tidak Memuaskan",
          maxRateDescription: "Sangat Memuaskan",
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "html",
          name: "Title 13",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 4'] or {KT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          html: '<div style="\nbackground:#EEF4FB;\npadding:14px 24px;\nborder-radius:12px;\nmargin-top:10px;\ntext-align:center;\n">\n    <span style="\n    color:#1E293B;\n    font-size:20px;\n    font-weight:700;">\n         Preferensi Produk\n    </span>\n</div>',
        },
        {
          type: "ranking",
          name: "KT - Rank",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 4'] or {KT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Mohon urutkan aspek-aspek  berikut berdasarkan tingkat kepentingannya bagi perusahaan Anda dalam memilih produk Kitchen Towel",
          description:
            "Drag & drop untuk mengurutkan atribut dari yang paling penting",
          isRequired: true,
          errorLocation: "bottom",
          choices: [
            {
              value: "2",
              text: "Daya Serap",
            },
            {
              value: "1",
              text: "Kekuatan",
            },
            {
              value: "3",
              text: "Ketebalan",
            },
            {
              value: "4",
              text: "Ukuran",
            },
            {
              value: "5",
              text: "Desain Kemasan",
            },
          ],
        },
        {
          type: "checkbox",
          name: "KT - Keunggulan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 4'] or {KT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          startWithNewLine: false,
          title:
            "Menurut Anda, apa saja keunggulan utama Kitchen Towel Suparma dibandingkan dengan produk dari supplier lain?",
          description: "Pilih maksimal 3 opsi",
          isRequired: true,
          choices: [
            {
              value: "2",
              text: "Daya Serap",
            },
            {
              value: "1",
              text: "Kekuatan",
            },
            {
              value: "3",
              text: "Ketebalan",
            },
            {
              value: "4",
              text: "Ukuran",
            },
            {
              value: "5",
              text: "Desain Kemasan",
            },
          ],
          maxSelectedChoices: 3,
        },
        {
          type: "boolean",
          name: "KT - Preferensi Daya Serap",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 4'] or {KT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Saat terkena air atau cairan, karakteristik Kitchen Towel seperti apa yang paling sesuai dengan kebutuhan operasional Anda?",
          isRequired: true,
          labelTrue: "Kuat Saat Basah",
          labelFalse: "Mudah Menyerap",
        },
        {
          type: "boolean",
          name: "KT - Preferensi Tekstur",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 4'] or {KT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Karakteristik Kitchen Towel seperti apa yang paling sesuai dengan kebutuhan operasional Anda?",
          isRequired: true,
          labelTrue: "Fleksibel & Mudah Dilipat",
          labelFalse: "Tebal & Kuat",
        },
        {
          type: "boolean",
          name: "KT - Preferensi Bentuk",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 4'] or {KT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Bentuk Kitchen Towel seperti apa yang paling sesuai dengan kebutuhan operasional Anda?  ",
          isRequired: true,
          labelTrue: "Sheet/Lembaran",
          labelFalse: "Roll/Gulung",
        },
        {
          type: "boolean",
          name: "KT - Preferensi Ukuran",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 4'] or {KT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Ukuran Kitchen Towel seperti apa yang paling sesuai dengan kebutuhan operasional Anda?  ",
          isRequired: true,
          labelTrue: "Roll Panjang",
          labelFalse: "Lembar Besar & Lebar",
        },
        {
          type: "radiogroup",
          name: "KT - Preferensi Material",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 4'] or {KT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Jenis kemasan Kitchen Towel seperti apa yang paling sesuai dengan kebutuhan perusahaan Anda?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Kemasan plastik konvensional",
            },
            {
              value: "2",
              text: "Kemasan plastik ramah lingkungan (biodegradable)",
            },
            {
              value: "3",
              text: "Kemasan kardus atau kertas (paper-based)",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "KT - Preferensi Dispencer",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 4'] or {KT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          startWithNewLine: false,
          title:
            "Apakah perusahaan Anda tertarik untuk menggunakan wadah atau dispenser Kitchen Towel yang disediakan oleh Suparma?",
          choices: [
            {
              value: "1",
              text: "Ya, sudah menggunakan",
            },
            {
              value: "2",
              text: "Ya, ingin menggunakan",
            },
            {
              value: "3",
              text: "Tidak, belum membutuhkan",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "KT - Switching Behaviour",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 4'] or {KT - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Jika ada supplier lain yang menawarkan Kitchen Towel dengan kualitas relatif setara dan harga 5% lebih murah, langkah apa yang paling mungkin dilakukan perusahaan Anda?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Tetap menggunakan Suparma",
            },
            {
              value: "2",
              text: "Mengalihkan sebagian pembelian",
            },
            {
              value: "3",
              text: "Beralih sepenuhnya ke supplier lain",
            },
          ],
        },
      ],
    },
    {
      name: "Cocktail Napkin",
      visibleIf:
        "{Ordered Tissue (Procurement)} anyof ['Item 5'] or {Used Tissue (End User)} anyof ['Item 5']",
      elements: [
        {
          type: "html",
          name: "Header13",
          html: '<div style="\nmargin:-38px -40px 30px -40px;\noverflow:hidden;\n">\n\n<img\nsrc="https://api.surveyjs.io/private/Surveys/files?name=3a24c14a-303e-43d6-8cb0-2f88ee3ea054"\nstyle="\nwidth:100%;\ndisplay:block;\nborder-radius:0;\n">\n</div>',
        },
        {
          type: "html",
          name: "question6",
          html: '<div style="\nbackground:linear-gradient(135deg,#FFFFFF,#F8FAFC);\npadding:28px 32px;\nborder-radius:16px;\nborder-left:8px solid #EEF4FB;\nbox-shadow:0 4px 16px rgba(0,0,0,.08);\n">\n    <div style="\n    color:#0F172A;\n    font-size:23px;\n    font-weight:700;\n    text-align:center;\n    margin-bottom:8px;">\n        Cocktail Napkin\n    </div>',
        },
        {
          type: "checkbox",
          name: "Jenis CN",
          title:
            "Apa saja jenis Cocktail Napkin Suparma yang dibeli atau digunakan oleh perusahaan Anda selama 1 tahun terakhir?",
          isRequired: true,
          errorLocation: "bottom",
          choices: [
            "Cocktail Napkin - Border Embossed",
            "Cocktail Napkin - Full Embossed",
            "Cocktail Napkin - Full Embossed Non Border",
            "Cocktail Napkin - Brown",
          ],
        },
        {
          type: "matrixdropdown",
          name: "Needs CN",
          visibleIf: "{Ordered Tissue (Procurement)} anyof ['Item 5']",
          title:
            "Pilih opsi yang paling sesuai untuk menggambarkan aktivitas pembelian Cocktail Napkin di perusahaan Anda selama 1 tahun terakhir.",
          isRequired: true,
          errorLocation: "bottom",
          columns: [
            {
              name: "CN - Purchase Frequency",
              title: "Frekuensi Order",
              cellType: "dropdown",
              isRequired: true,
              choices: [
                {
                  value: 2,
                  text: "Kurang dari 1 bulan sekali",
                },
                {
                  value: 3,
                  text: "1 bulan sekali",
                },
                {
                  value: 4,
                  text: "2 bulan sekali",
                },
                {
                  value: 5,
                  text: "3 bulan sekali",
                },
                {
                  value: 6,
                  text: "lebih dari 3 bulan sekali",
                },
              ],
              storeOthersAsComment: true,
            },
            {
              name: "CN - Vol per Purchase",
              title: "Volume per Order",
              cellType: "dropdown",
              isRequired: true,
              choices: [
                {
                  value: 1,
                  text: "≤ 10 karton",
                },
                {
                  value: 2,
                  text: "11–50 karton",
                },
                {
                  value: 3,
                  text: "51–100 karton",
                },
                {
                  value: 4,
                  text: "101–300 karton",
                },
                {
                  value: 5,
                  text: "> 300 karton",
                },
              ],
              storeOthersAsComment: true,
            },
            {
              name: "CN - Supplier",
              title: "Semua Merek yang Digunakan",
              cellType: "tagbox",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "See U",
                },
                {
                  value: "2",
                  text: "Plenty",
                },
                {
                  value: "3",
                  text: "Paseo",
                },
                {
                  value: "4",
                  text: "Nice",
                },
                {
                  value: "5",
                  text: "Tessa",
                },
                {
                  value: "6",
                  text: "Livi",
                },
                {
                  value: "7",
                  text: "Montiss",
                },
                {
                  value: "8",
                  text: "Jolly",
                },
              ],
              showOtherItem: true,
              noneText: "Tidak Ada",
              otherText: "Lainnya",
              storeOthersAsComment: true,
              selectAllText: "See U",
            },
            {
              name: "CN - Price Comp",
              title: "Harga Suparma Dibandingkan Merek Lain",
              cellType: "dropdown",
              isRequired: true,
              choices: [
                {
                  value: 1,
                  text: "Tidak Bersaing",
                },
                {
                  value: 2,
                  text: "Kurang Bersaing",
                },
                {
                  value: 3,
                  text: "Cukup Bersaing",
                },
                {
                  value: 4,
                  text: "Bersaing",
                },
                {
                  value: 5,
                  text: "Sangat Bersaing",
                },
              ],
              storeOthersAsComment: true,
            },
          ],
          cellErrorLocation: "bottom",
          choices: [1, 2, 3, 4, 5],
          rows: [
            {
              value: "Cocktail Napkin - Border Embossed",
              visibleIf:
                "{Jenis CN} anyof ['Cocktail Napkin - Border Embossed']",
            },
            {
              value: "Cocktail Napkin - Full Embossed",
              visibleIf: "{Jenis CN} anyof ['Cocktail Napkin - Full Embossed']",
            },
            {
              value: "Cocktail Napkin - Full Embossed Non Border",
              visibleIf:
                "{Jenis CN} anyof ['Cocktail Napkin - Full Embossed Non Border']",
            },
            {
              value: "Cocktail Napkin - Brown",
              visibleIf: "{Jenis CN} anyof ['Cocktail Napkin - Brown']",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "CN - Penggunaan DM",
          visibleIf: "{Peran Responden} anyof ['Item 1', 'Item 3']",
          title:
            "Apakah Anda pernah menggunakan secara langsung produk Cocktail Napkin Suparma (Plenty & See U)?",
          isRequired: true,
          choices: [
            {
              value: "Item 1",
              text: "Ya, pernah menggunakan",
            },
            {
              value: "Item 2",
              text: "Tidak pernah",
            },
          ],
        },
        {
          type: "html",
          name: "Title13",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 5'] or {CN - Penggunaan DM} anyof ['Item 1']",
          html: '<div style="\nbackground:#EEF4FB;\npadding:14px 24px;\nborder-radius:12px;\nmargin-top:10px;\ntext-align:center;\n">\n    <span style="\n    color:#1E293B;\n    font-size:20px;\n    font-weight:700;">\n         Kualitas Produk\n    </span>\n</div>',
        },
        {
          type: "rating",
          name: "CN - Tekstur",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 5'] or {CN - Penggunaan DM} anyof ['Item 1']",
          title:
            "Bagaimana TEKSTUR Cocktail Napkin Suparma saat bersentuhan dengan kulit atau mulut?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat kasar",
            },
            {
              value: "2",
              text: "Kasar",
            },
            {
              value: "3",
              text: "Agak kasar",
            },
            {
              value: "4",
              text: "Agak halus",
            },
            {
              value: "5",
              text: "Halus",
            },
            {
              value: "6",
              text: "Sangat halus",
            },
          ],
          minRateDescription: {
            id: "Sangat Kasar",
          },
          maxRateDescription: {
            id: "Sangat Halus",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "CN - Kekuatan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 5'] or {CN - Penggunaan DM} anyof ['Item 1']",
          startWithNewLine: false,
          title: "Bagaimana KEKUATAN Cocktail Napkin Suparma saat digunakan?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat mudah robek",
            },
            {
              value: "2",
              text: "Mudah robek",
            },
            {
              value: "3",
              text: "Agak mudah robek",
            },
            {
              value: "4",
              text: "Agak kuat",
            },
            {
              value: "5",
              text: "Kuat",
            },
            {
              value: "6",
              text: "Sangat kuat",
            },
          ],
          minRateDescription: {
            id: "Sangat Mudah Robek",
          },
          maxRateDescription: {
            id: "Sangat Kuat",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "CN - Ukuran",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 5'] or {CN - Penggunaan DM} anyof ['Item 1']",
          title: "Bagaimana UKURAN LEMBAR Cocktail Napkin Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat kecil",
            },
            {
              value: "2",
              text: "Kecil",
            },
            {
              value: "3",
              text: "Cukup kecil",
            },
            {
              value: "4",
              text: "Cukup lebar",
            },
            {
              value: "5",
              text: "Lebar",
            },
            {
              value: "6",
              text: "Sangat lebar",
            },
          ],
          minRateDescription: {
            id: "Sangat Kecil",
          },
          maxRateDescription: {
            id: "Sangat Lebar",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "CN - Kebersihan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 5'] or {CN - Penggunaan DM} anyof ['Item 1']",
          startWithNewLine: false,
          title: "Bagaimana KEBERSIHAN Cocktail Napkin Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat banyak serat, debu, atau noda",
            },
            {
              value: "2",
              text: "Banyak serat, debu, atau noda",
            },
            {
              value: "3",
              text: "Agak banyak serat, debu, atau noda",
            },
            {
              value: "4",
              text: "Agak bersih",
            },
            {
              value: "5",
              text: "Bersih",
            },
            {
              value: "6",
              text: "Sangat bersih",
            },
          ],
          minRateDescription: {
            id: "Sangat Banyak Noda",
          },
          maxRateDescription: {
            id: "Sangat Bersih",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "CN - Desain",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 5'] or {CN - Penggunaan DM} anyof ['Item 1']",
          title: "Bagaimana DESAIN KEMASAN Cocktail Napkin Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: "1",
              text: "Tidak menarik",
            },
            {
              value: "2",
              text: "Kurang menarik",
            },
            {
              value: "3",
              text: "Biasa saja",
            },
            {
              value: "4",
              text: "Menarik",
            },
            {
              value: "5",
              text: "Sangat menarik",
            },
          ],
          minRateDescription: {
            id: "Tidak Menarik",
          },
          maxRateDescription: {
            id: "Sangat Menarik",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "CN - Material",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 5'] or {CN - Penggunaan DM} anyof ['Item 1']",
          startWithNewLine: false,
          title: "Bagaimana KUALITAS KEMASAN Cocktail Napkin Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: "1",
              text: "Sangat buruk",
            },
            {
              value: "2",
              text: "Buruk",
            },
            {
              value: "3",
              text: "Biasa saja",
            },
            {
              value: "4",
              text: "Baik",
            },
            {
              value: "5",
              text: "Sangat baik",
            },
          ],
          minRateDescription: {
            id: "Sangat Buruk",
          },
          maxRateDescription: {
            id: "Sangat Baik",
          },
        },
        {
          type: "rating",
          name: "CN Overall Satisfaction",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 5'] or {CN - Penggunaan DM} anyof ['Item 1']",
          title:
            "Secara keseluruhan, bagaimana penilaian Anda terhadap produk Cocktail Napkin Suparma?",
          rateType: "smileys",
          minRateDescription: "Tidak Memuaskan",
          maxRateDescription: "Sangat Memuaskan",
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "html",
          name: "Title14",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 5'] or {CN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          html: '<div style="\nbackground:#EEF4FB;\npadding:14px 24px;\nborder-radius:12px;\nmargin-top:10px;\ntext-align:center;\n">\n    <span style="\n    color:#1E293B;\n    font-size:20px;\n    font-weight:700;">\n         Preferensi Produk\n    </span>\n</div>',
        },
        {
          type: "ranking",
          name: "CN - Rank",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 5'] or {CN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Mohon urutkan aspek-aspek berikut berdasarkan tingkat kepentingannya bagi perusahaan Anda dalam memilih produk Cocktail Napkin",
          description:
            "Drag & drop untuk mengurutkan atribut dari yang paling penting",
          isRequired: true,
          errorLocation: "bottom",
          choices: [
            {
              value: "1",
              text: "Kelembutan",
            },
            {
              value: "2",
              text: "Kekuatan",
            },
            {
              value: "3",
              text: "Kebersihan",
            },
            {
              value: "5",
              text: "Ukuran",
            },
            {
              value: "6",
              text: "Desain Kemasan",
            },
          ],
        },
        {
          type: "checkbox",
          name: "CN - Keunggulan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 5'] or {CN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          startWithNewLine: false,
          title:
            "Menurut Anda, apa saja keunggulan utama Cocktail Napkin Suparma dibandingkan dengan produk dari supplier lain?",
          description: "Pilih maksimal 3 opsi",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Kelembutan",
            },
            {
              value: "2",
              text: "Kekuatan",
            },
            {
              value: "3",
              text: "Kebersihan",
            },
            {
              value: "5",
              text: "Ukuran",
            },
            {
              value: "6",
              text: "Desain Kemasan",
            },
          ],
          maxSelectedChoices: 3,
        },
        {
          type: "boolean",
          name: "CN - Preferensi Tekstur",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 5'] or {CN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Karakteristik Cocktail Napkin seperti apa yang paling sesuai dengan kebutuhan operasional Anda?    ",
          isRequired: true,
          labelTrue: "Tidak Mudah Sobek",
          labelFalse: "Lembut di Mulut",
        },
        {
          type: "boolean",
          name: "CN - Preferensi Desain Kemasan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 5'] or {CN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Desain kemasan Cocktail Napkin seperti apa yang paling sesuai dengan kebutuhan operasional Anda?    ",
          isRequired: true,
          labelTrue: "Printed Logo",
          labelFalse: "Polos",
        },
        {
          type: "radiogroup",
          name: "CN - Preferensi Material",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 5'] or {CN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Jenis kemasan Cocktail Napkin seperti apa yang paling sesuai dengan kebutuhan perusahaan Anda?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Kemasan plastik konvensional",
            },
            {
              value: "2",
              text: "Kemasan plastik ramah lingkungan (biodegradable)",
            },
            {
              value: "3",
              text: "Kemasan kardus atau kertas (paper-based)",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "CN - Preferensi Dispencer",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 5'] or {CN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          startWithNewLine: false,
          title:
            "Apakah perusahaan Anda tertarik untuk menggunakan wadah atau dispenser Cocktail Napkin yang disediakan oleh Suparma?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Ya, sudah menggunakan",
            },
            {
              value: "2",
              text: "Ya, ingin menggunakan",
            },
            {
              value: "3",
              text: "Tidak, belum membutuhkan",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "CN - Switching Behaviour",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 5'] or {CN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Jika ada supplier lain yang menawarkan Cocktail Napkin dengan kualitas relatif setara dan harga 5% lebih murah, langkah apa yang paling mungkin dilakukan perusahaan Anda?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Tetap menggunakan Suparma",
            },
            {
              value: "2",
              text: "Mengalihkan sebagian pembelian",
            },
            {
              value: "3",
              text: "Beralih sepenuhnya ke supplier lain",
            },
          ],
        },
      ],
    },
    {
      name: "Dinner Napkin",
      visibleIf:
        "{Ordered Tissue (Procurement)} anyof ['Item 6'] or {Used Tissue (End User)} anyof ['Item 6']",
      elements: [
        {
          type: "html",
          name: "Header14",
          html: '<div style="\nmargin:-38px -40px 30px -40px;\noverflow:hidden;\n">\n\n<img\nsrc="https://api.surveyjs.io/private/Surveys/files?name=3a24c14a-303e-43d6-8cb0-2f88ee3ea054"\nstyle="\nwidth:100%;\ndisplay:block;\nborder-radius:0;\n">\n</div>',
        },
        {
          type: "html",
          name: "question5",
          html: '<div style="\nbackground:linear-gradient(135deg,#FFFFFF,#F8FAFC);\npadding:28px 32px;\nborder-radius:16px;\nborder-left:8px solid #EEF4FB;\nbox-shadow:0 4px 16px rgba(0,0,0,.08);\n">\n    <div style="\n    color:#0F172A;\n    font-size:23px;\n    font-weight:700;\n    text-align:center;\n    margin-bottom:8px;">\n        Dinner Napkin\n    </div>',
        },
        {
          type: "checkbox",
          name: "Jenis DN",
          title:
            "Apa saja jenis Dinner Napkin Suparma yang dibeli atau digunakan oleh perusahaan Anda selama 1 tahun terakhir?",
          isRequired: true,
          errorLocation: "bottom",
          choices: [
            "Dinner Napkin - Border Embossed",
            "Dinner Napkin - Full Embossed",
            "Dinner Napkin - Full Embossed Non Border",
            "Dinner Napkin - Brown",
          ],
        },
        {
          type: "matrixdropdown",
          name: "Needs DN",
          visibleIf: "{Ordered Tissue (Procurement)} anyof ['Item 6']",
          title:
            "Pilih opsi yang paling sesuai untuk menggambarkan aktivitas pembelian Dinner Napkin di perusahaan Anda selama 1 tahun terakhir.",
          isRequired: true,
          errorLocation: "bottom",
          columns: [
            {
              name: "DN - Purchase Frequency",
              title: "Frekuensi Order",
              cellType: "dropdown",
              isRequired: true,
              choices: [
                {
                  value: 2,
                  text: "Kurang dari 1 bulan sekali",
                },
                {
                  value: 3,
                  text: "1 bulan sekali",
                },
                {
                  value: 4,
                  text: "2 bulan sekali",
                },
                {
                  value: 5,
                  text: "3 bulan sekali",
                },
                {
                  value: 6,
                  text: "lebih dari 3 bulan sekali",
                },
              ],
              storeOthersAsComment: true,
            },
            {
              name: "DN - Vol per Purchase",
              title: "Volume per Order",
              cellType: "dropdown",
              isRequired: true,
              choices: [
                {
                  value: 1,
                  text: "≤ 10 karton",
                },
                {
                  value: 2,
                  text: "11–50 karton",
                },
                {
                  value: 3,
                  text: "51–100 karton",
                },
                {
                  value: 4,
                  text: "101–300 karton",
                },
                {
                  value: 5,
                  text: "> 300 karton",
                },
              ],
              storeOthersAsComment: true,
            },
            {
              name: "DN - Supplier",
              title: "Semua Merek yang Digunakan",
              cellType: "tagbox",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "See U",
                },
                {
                  value: "2",
                  text: "Plenty",
                },
                {
                  value: "3",
                  text: "Paseo",
                },
                {
                  value: "4",
                  text: "Nice",
                },
                {
                  value: "5",
                  text: "Tessa",
                },
                {
                  value: "6",
                  text: "Livi",
                },
                {
                  value: "7",
                  text: "Montiss",
                },
                {
                  value: "8",
                  text: "Jolly",
                },
              ],
              showOtherItem: true,
              noneText: "Tidak Ada",
              otherText: "Lainnya",
              storeOthersAsComment: true,
              selectAllText: "See U",
            },
            {
              name: "DN - Price Comp",
              title: "Harga Suparma Dibandingkan Merek Lain",
              cellType: "dropdown",
              isRequired: true,
              choices: [
                {
                  value: 1,
                  text: "Tidak Bersaing",
                },
                {
                  value: 2,
                  text: "Kurang Bersaing",
                },
                {
                  value: 3,
                  text: "Cukup Bersaing",
                },
                {
                  value: 4,
                  text: "Bersaing",
                },
                {
                  value: 5,
                  text: "Sangat Bersaing",
                },
              ],
              storeOthersAsComment: true,
            },
          ],
          cellErrorLocation: "bottom",
          choices: [1, 2, 3, 4, 5],
          rows: [
            {
              value: "Dinner Napkin - Border Embossed",
              visibleIf: "{Jenis DN} anyof ['Dinner Napkin - Border Embossed']",
            },
            {
              value: "Dinner Napkin - Full Embossed",
              visibleIf: "{Jenis DN} anyof ['Dinner Napkin - Full Embossed']",
            },
            {
              value: "Dinner Napkin - Full Embossed Non Border",
              visibleIf:
                "{Jenis DN} anyof ['Dinner Napkin - Full Embossed Non Border']",
            },
            {
              value: "Dinner Napkin - Brown",
              visibleIf: "{Jenis DN} anyof ['Dinner Napkin - Brown']",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "DN - Penggunaan DM",
          visibleIf: "{Peran Responden} anyof ['Item 1', 'Item 3']",
          title:
            "Apakah Anda pernah menggunakan secara langsung produk Dinner Napkin Suparma (Plenty & See U)?",
          isRequired: true,
          choices: [
            {
              value: "Item 1",
              text: "Ya, pernah menggunakan",
            },
            {
              value: "Item 2",
              text: "Tidak pernah",
            },
          ],
        },
        {
          type: "html",
          name: "Title15",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 6'] or {DN - Penggunaan DM} anyof ['Item 1']",
          html: '<div style="\nbackground:#EEF4FB;\npadding:14px 24px;\nborder-radius:12px;\nmargin-top:10px;\ntext-align:center;\n">\n    <span style="\n    color:#1E293B;\n    font-size:20px;\n    font-weight:700;">\n         Kualitas Produk\n    </span>\n</div>',
        },
        {
          type: "rating",
          name: "DN - Tekstur",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 6'] or {DN - Penggunaan DM} anyof ['Item 1']",
          title:
            "Bagaimana TEKSTUR Dinner Napkin Suparma saat bersentuhan dengan kulit atau mulut?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat kasar",
            },
            {
              value: "2",
              text: "Kasar",
            },
            {
              value: "3",
              text: "Agak kasar",
            },
            {
              value: "4",
              text: "Agak halus",
            },
            {
              value: "5",
              text: "Halus",
            },
            {
              value: "6",
              text: "Sangat halus",
            },
          ],
          minRateDescription: {
            id: "Sangat Kasar",
          },
          maxRateDescription: {
            id: "Sangat Halus",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "DN - Kekuatan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 6'] or {DN - Penggunaan DM} anyof ['Item 1']",
          startWithNewLine: false,
          title: "Bagaimana KEKUATAN Dinner Napkin Suparma saat digunakan?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat mudah robek",
            },
            {
              value: "2",
              text: "Mudah robek",
            },
            {
              value: "3",
              text: "Agak mudah robek",
            },
            {
              value: "4",
              text: "Agak kuat",
            },
            {
              value: "5",
              text: "Kuat",
            },
            {
              value: "6",
              text: "Sangat kuat",
            },
          ],
          minRateDescription: {
            id: "Sangat Mudah Robek",
          },
          maxRateDescription: {
            id: "Sangat Kuat",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "DN - Ukuran",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 6'] or {DN - Penggunaan DM} anyof ['Item 1']",
          title: "Bagaimana UKURAN LEMBAR Dinner Napkin Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat kecil",
            },
            {
              value: "2",
              text: "Kecil",
            },
            {
              value: "3",
              text: "Cukup kecil",
            },
            {
              value: "4",
              text: "Cukup lebar",
            },
            {
              value: "5",
              text: "Lebar",
            },
            {
              value: "6",
              text: "Sangat lebar",
            },
          ],
          minRateDescription: {
            id: "Sangat Kecil",
          },
          maxRateDescription: {
            id: "Sangat Lebar",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "DN - Kebersihan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 6'] or {DN - Penggunaan DM} anyof ['Item 1']",
          startWithNewLine: false,
          title: "Bagaimana KEBERSIHAN Dinner Napkin Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat banyak serat, debu, atau noda",
            },
            {
              value: "2",
              text: "Banyak serat, debu, atau noda",
            },
            {
              value: "3",
              text: "Agak banyak serat, debu, atau noda",
            },
            {
              value: "4",
              text: "Agak bersih",
            },
            {
              value: "5",
              text: "Bersih",
            },
            {
              value: "6",
              text: "Sangat bersih",
            },
          ],
          minRateDescription: {
            id: "Sangat Banyak Noda",
          },
          maxRateDescription: {
            id: "Sangat Bersih",
          },
        },
        {
          type: "rating",
          name: "DN - Desain",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 6'] or {DN - Penggunaan DM} anyof ['Item 1']",
          title: "Bagaimana DESAIN KEMASAN Dinner Napkin Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: "1",
              text: "Tidak menarik",
            },
            {
              value: "2",
              text: "Kurang menarik",
            },
            {
              value: "3",
              text: "Biasa saja",
            },
            {
              value: "4",
              text: "Menarik",
            },
            {
              value: "5",
              text: "Sangat menarik",
            },
          ],
          minRateDescription: {
            id: "Tidak Menarik",
          },
          maxRateDescription: {
            id: "Sangat Menarik",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "DN - Material",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 6'] or {DN - Penggunaan DM} anyof ['Item 1']",
          startWithNewLine: false,
          title: "Bagaimana KUALITAS KEMASAN Dinner Napkin Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: "2",
              text: "Sangat buruk",
            },
            {
              value: "3",
              text: "Buruk",
            },
            {
              value: "4",
              text: "Biasa saja",
            },
            {
              value: "5",
              text: "Baik",
            },
            {
              value: "6",
              text: "Sangat baik",
            },
          ],
          minRateDescription: {
            id: "Sangat Buruk",
          },
          maxRateDescription: {
            id: "Sangat Baik",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "DN Overall Satisfaction",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 6'] or {DN - Penggunaan DM} anyof ['Item 1']",
          title:
            "Secara keseluruhan, bagaimana penilaian Anda terhadap produk Dinner Napkin Suparma?",
          rateType: "smileys",
          minRateDescription: "Tidak Memuaskan",
          maxRateDescription: "Sangat Memuaskan",
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "html",
          name: "Tiitle16",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 6'] or {DN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          html: '<div style="\nbackground:#EEF4FB;\npadding:14px 24px;\nborder-radius:12px;\nmargin-top:10px;\ntext-align:center;\n">\n    <span style="\n    color:#1E293B;\n    font-size:20px;\n    font-weight:700;">\n         Preferensi Produk\n    </span>\n</div>',
        },
        {
          type: "ranking",
          name: "DN - Rank",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 6'] or {DN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Mohon urutkan aspek-aspek berikut berdasarkan tingkat kepentingannya bagi perusahaan Anda dalam memilih produk Dinner Napkin",
          description:
            "Drag & drop untuk mengurutkan atribut dari yang paling penting",
          isRequired: true,
          errorLocation: "bottom",
          choices: [
            {
              value: "1",
              text: "Kelembutan",
            },
            {
              value: "2",
              text: "Kekuatan",
            },
            {
              value: "3",
              text: "Kebersihan",
            },
            {
              value: "5",
              text: "Ukuran",
            },
            {
              value: "6",
              text: "Desain Kemasan",
            },
          ],
        },
        {
          type: "checkbox",
          name: "DN - Keunggulan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 6'] or {DN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          startWithNewLine: false,
          title:
            "Menurut Anda, apa saja keunggulan utama Dinner Napkin Suparma dibandingkan dengan produk dari supplier lain?",
          description: "Pilih maksimal 3 opsi",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Kelembutan",
            },
            {
              value: "2",
              text: "Kekuatan",
            },
            {
              value: "3",
              text: "Kebersihan",
            },
            {
              value: "5",
              text: "Ukuran",
            },
            {
              value: "6",
              text: "Desain Kemasan",
            },
          ],
          maxSelectedChoices: 3,
        },
        {
          type: "boolean",
          name: "DN - Preferensi Tekstur",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 6'] or {DN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Karakteristik Dinner Napkin seperti apa yang paling sesuai dengan kebutuhan operasional Anda?    ",
          isRequired: true,
          labelTrue: "Tidak Mudah Sobek",
          labelFalse: "Lembut di Mulut",
        },
        {
          type: "boolean",
          name: "DN - Preferensi Desain Kemasan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 6'] or {DN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Desain kemasan Dinner Napkin seperti apa yang paling sesuai dengan kebutuhan operasional Anda?    ",
          isRequired: true,
          labelTrue: "Printed Logo",
          labelFalse: "Polos",
        },
        {
          type: "radiogroup",
          name: "DN - Prefernsi Kemasan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 6'] or {DN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Jenis kemasan Dinner Napkin seperti apa yang paling sesuai dengan kebutuhan perusahaan Anda?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Kemasan plastik konvensional",
            },
            {
              value: "2",
              text: "Kemasan plastik ramah lingkungan (biodegradable)",
            },
            {
              value: "3",
              text: "Kemasan kardus atau kertas (paper-based)",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "DN - Preferensi Dispencer",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 6'] or {DN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          startWithNewLine: false,
          title:
            "Apakah perusahaan Anda tertarik untuk menggunakan wadah atau dispenser Dinner Napkin yang disediakan oleh Suparma?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Ya, sudah menggunakan",
            },
            {
              value: "2",
              text: "Ya, ingin menggunakan",
            },
            {
              value: "3",
              text: "Tidak, belum membutuhkan",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "DN - Switching Behaviour",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 6'] or {DN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Jika ada supplier lain yang menawarkan Dinner Napkin dengan kualitas relatif setara dan harga 5% lebih murah, langkah apa yang paling mungkin dilakukan perusahaan Anda?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Tetap menggunakan Suparma",
            },
            {
              value: "2",
              text: "Mengalihkan sebagian pembelian",
            },
            {
              value: "3",
              text: "Beralih sepenuhnya ke supplier lain",
            },
          ],
        },
      ],
    },
    {
      name: "Luncheon Napkin",
      visibleIf:
        "{Ordered Tissue (Procurement)} anyof ['Item 7'] or {Used Tissue (End User)} anyof ['Item 7']",
      elements: [
        {
          type: "html",
          name: "Header15",
          html: '<div style="\nmargin:-38px -40px 30px -40px;\noverflow:hidden;\n">\n\n<img\nsrc="https://api.surveyjs.io/private/Surveys/files?name=3a24c14a-303e-43d6-8cb0-2f88ee3ea054"\nstyle="\nwidth:100%;\ndisplay:block;\nborder-radius:0;\n">\n</div>',
        },
        {
          type: "html",
          name: "question7",
          html: '<div style="\nbackground:linear-gradient(135deg,#FFFFFF,#F8FAFC);\npadding:28px 32px;\nborder-radius:16px;\nborder-left:8px solid #EEF4FB;\nbox-shadow:0 4px 16px rgba(0,0,0,.08);\n">\n    <div style="\n    color:#0F172A;\n    font-size:23px;\n    font-weight:700;\n    text-align:center;\n    margin-bottom:8px;">\n        Luncheon Napkin\n    </div>',
        },
        {
          type: "checkbox",
          name: "Jenis LN",
          title:
            "Apa saja jenis Luncheon Napkin Suparma yang dibeli atau digunakan oleh perusahaan Anda selama 1 tahun terakhir?",
          isRequired: true,
          errorLocation: "bottom",
          choices: [
            {
              value: "Luncheon Napkin - 1/4 Fold Embossed",
              text: "",
            },
            {
              value: "Luncheon Napkin - 1/8 Fold Embossed",
              text: "",
            },
            {
              value: "Luncheon Napkin - Off Fold Embossed",
              text: "",
            },
            {
              value: "Luncheon Napkin - Brown Embossed",
              text: "",
            },
            {
              value: "Luncheon Napkin - Brown Non Embossed",
              text: "",
            },
          ],
        },
        {
          type: "matrixdropdown",
          name: "Needs LN",
          visibleIf: "{Ordered Tissue (Procurement)} anyof ['Item 7']",
          title:
            "Pilih opsi yang paling sesuai untuk menggambarkan aktivitas pembelian Luncheon Napkin di perusahaan Anda selama 1 tahun terakhir.",
          isRequired: true,
          errorLocation: "bottom",
          columns: [
            {
              name: "LN - Purchase Frequency",
              title: "Frekuensi Order",
              cellType: "dropdown",
              isRequired: true,
              choices: [
                {
                  value: 2,
                  text: "Kurang dari 1 bulan sekali",
                },
                {
                  value: 3,
                  text: "1 bulan sekali",
                },
                {
                  value: 4,
                  text: "2 bulan sekali",
                },
                {
                  value: 5,
                  text: "3 bulan sekali",
                },
                {
                  value: 6,
                  text: "lebih dari 3 bulan sekali",
                },
              ],
              storeOthersAsComment: true,
            },
            {
              name: "LN - Vol per Purchase",
              title: "Volume per Order",
              cellType: "dropdown",
              isRequired: true,
              choices: [
                {
                  value: 1,
                  text: "≤ 10 karton",
                },
                {
                  value: 2,
                  text: "11–50 karton",
                },
                {
                  value: 3,
                  text: "51–100 karton",
                },
                {
                  value: 4,
                  text: "101–300 karton",
                },
                {
                  value: 5,
                  text: "> 300 karton",
                },
              ],
              storeOthersAsComment: true,
            },
            {
              name: "LN - Supplier",
              title: "Semua Merek yang Digunakan",
              cellType: "tagbox",
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: "See U",
                },
                {
                  value: "2",
                  text: "Plenty",
                },
                {
                  value: "3",
                  text: "Paseo",
                },
                {
                  value: "4",
                  text: "Nice",
                },
                {
                  value: "5",
                  text: "Tessa",
                },
                {
                  value: "6",
                  text: "Livi",
                },
                {
                  value: "7",
                  text: "Montiss",
                },
                {
                  value: "8",
                  text: "Jolly",
                },
              ],
              showOtherItem: true,
              noneText: "Tidak Ada",
              otherText: "Lainnya",
              storeOthersAsComment: true,
              selectAllText: "See U",
            },
            {
              name: "LN - Price Comp",
              title: "Harga Suparma Dibandingkan Merek Lain",
              cellType: "dropdown",
              isRequired: true,
              choices: [
                {
                  value: 1,
                  text: "Tidak Bersaing",
                },
                {
                  value: 2,
                  text: "Kurang Bersaing",
                },
                {
                  value: 3,
                  text: "Cukup Bersaing",
                },
                {
                  value: 4,
                  text: "Bersaing",
                },
                {
                  value: 5,
                  text: "Sangat Bersaing",
                },
              ],
              storeOthersAsComment: true,
            },
          ],
          cellErrorLocation: "bottom",
          choices: [1, 2, 3, 4, 5],
          rows: [
            {
              value: "Luncheon Napkin - 1/4 Fold Embossed",
              text: "",
              visibleIf:
                "{Jenis LN} anyof ['Luncheon Napkin - 1/4 Fold Embossed']",
            },
            {
              value: "Luncheon Napkin - 1/8 Fold Embossed",
              text: "",
              visibleIf:
                "{Jenis LN} anyof ['Luncheon Napkin - 1/8 Fold Embossed']",
            },
            {
              value: "Luncheon Napkin - Off Fold Embossed",
              text: "",
              visibleIf:
                "{Jenis LN} anyof ['Luncheon Napkin - Off Fold Embossed']",
            },
            {
              value: "Luncheon Napkin - Brown Embossed",
              text: "",
              visibleIf:
                "{Jenis LN} anyof ['Luncheon Napkin - Brown Embossed']",
            },
            {
              value: "Luncheon Napkin - Brown Non Embossed",
              text: "",
              visibleIf:
                "{Jenis LN} anyof ['Luncheon Napkin - Brown Non Embossed']",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "LN - Penggunaan DM",
          visibleIf: "{Peran Responden} anyof ['Item 1', 'Item 3']",
          title:
            "Apakah Anda pernah menggunakan secara langsung produk Luncheon Napkin Suparma (Plenty & See U)?",
          isRequired: true,
          choices: [
            {
              value: "Item 1",
              text: "Ya, pernah menggunakan",
            },
            {
              value: "Item 2",
              text: "Tidak pernah",
            },
          ],
        },
        {
          type: "html",
          name: "Title16",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 7'] or {LN - Penggunaan DM} anyof ['Item 1']",
          html: '<div style="\nbackground:#EEF4FB;\npadding:14px 24px;\nborder-radius:12px;\nmargin-top:10px;\ntext-align:center;\n">\n    <span style="\n    color:#1E293B;\n    font-size:20px;\n    font-weight:700;">\n         Kualitas Produk\n    </span>\n</div>',
        },
        {
          type: "rating",
          name: "LN - Tekstur",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 7'] or {LN - Penggunaan DM} anyof ['Item 1']",
          title:
            "Bagaimana TEKSTUR Luncheon Napkin Suparma saat bersentuhan dengan kulit atau mulut?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat kasar",
            },
            {
              value: "2",
              text: "Kasar",
            },
            {
              value: "3",
              text: "Agak kasar",
            },
            {
              value: "4",
              text: "Agak halus",
            },
            {
              value: "5",
              text: "Halus",
            },
            {
              value: "6",
              text: "Sangat halus",
            },
          ],
          minRateDescription: {
            id: "Sangat Kasar",
          },
          maxRateDescription: {
            id: "Sangat Halus",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "LN - Kekuatan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 7'] or {LN - Penggunaan DM} anyof ['Item 1']",
          startWithNewLine: false,
          title: "Bagaimana KEKUATAN Luncheon Napkin Suparma saat digunakan?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat mudah robek",
            },
            {
              value: "2",
              text: "Mudah robek",
            },
            {
              value: "3",
              text: "Agak mudah robek",
            },
            {
              value: "4",
              text: "Agak kuat",
            },
            {
              value: "5",
              text: "Kuat",
            },
            {
              value: "6",
              text: "Sangat kuat",
            },
          ],
          minRateDescription: {
            id: "Sangat Mudah Robek",
          },
          maxRateDescription: {
            id: "Sangat Kuat",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "LN - Ukuran",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 7'] or {LN - Penggunaan DM} anyof ['Item 1']",
          title: "Bagaimana UKURAN LEMBAR Luncheon Napkin Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat kecil",
            },
            {
              value: "2",
              text: "Kecil",
            },
            {
              value: "3",
              text: "Cukup kecil",
            },
            {
              value: "4",
              text: "Cukup lebar",
            },
            {
              value: "5",
              text: "Lebar",
            },
            {
              value: "6",
              text: "Sangat lebar",
            },
          ],
          minRateDescription: {
            id: "Sangat Kecil",
          },
          maxRateDescription: {
            id: "Sangat Lebar",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "LN - Kebersihan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 7'] or {LN - Penggunaan DM} anyof ['Item 1']",
          startWithNewLine: false,
          title: "Bagaimana KEBERSIHAN Luncheon Napkin Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateCount: 6,
          rateValues: [
            {
              value: "1",
              text: "Sangat banyak serat, debu, atau noda",
            },
            {
              value: "2",
              text: "Banyak serat, debu, atau noda",
            },
            {
              value: "3",
              text: "Agak banyak serat, debu, atau noda",
            },
            {
              value: "4",
              text: "Agak bersih",
            },
            {
              value: "5",
              text: "Bersih",
            },
            {
              value: "6",
              text: "Sangat bersih",
            },
          ],
          minRateDescription: {
            id: "Sangat Banyak Noda",
          },
          maxRateDescription: {
            id: "Sangat Bersih",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "LN - Desain",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 7'] or {LN - Penggunaan DM} anyof ['Item 1']",
          title: "Bagaimana DESAIN KEMASAN Luncheon Napkin Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: "2",
              text: "Tidak menarik",
            },
            {
              value: "3",
              text: "Kurang menarik",
            },
            {
              value: "4",
              text: "Biasa saja",
            },
            {
              value: "5",
              text: "Menarik",
            },
            {
              value: "6",
              text: "Sangat menarik",
            },
          ],
          minRateDescription: {
            id: "Tidak Menarik",
          },
          maxRateDescription: {
            id: "Sangat Menarik",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "LN - Material",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 7'] or {LN - Penggunaan DM} anyof ['Item 1']",
          startWithNewLine: false,
          title: "Bagaimana KUALITAS KEMASAN Luncheon Napkin Suparma?",
          isRequired: true,
          rateType: "smileys",
          autoGenerate: false,
          rateValues: [
            {
              value: "2",
              text: "Sangat buruk",
            },
            {
              value: "3",
              text: "Buruk",
            },
            {
              value: "4",
              text: "Biasa saja",
            },
            {
              value: "5",
              text: "Baik",
            },
            {
              value: "6",
              text: "Sangat baik",
            },
          ],
          minRateDescription: {
            id: "Sangat Buruk",
          },
          maxRateDescription: {
            id: "Sangat Baik",
          },
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "rating",
          name: "LN Overall Satisfaction",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 7'] or {LN - Penggunaan DM} anyof ['Item 1']",
          title:
            "Secara keseluruhan, bagaimana penilaian Anda terhadap produk Luncheon Napkin Suparma?",
          rateType: "smileys",
          minRateDescription: "Tidak Memuaskan",
          maxRateDescription: "Sangat Memuaskan",
          rateDescriptionLocation: "topBottom",
        },
        {
          type: "html",
          name: "Title17",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 7'] or {LN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          html: '<div style="\nbackground:#EEF4FB;\npadding:14px 24px;\nborder-radius:12px;\nmargin-top:10px;\ntext-align:center;\n">\n    <span style="\n    color:#1E293B;\n    font-size:20px;\n    font-weight:700;">\n         Preferensi Produk\n    </span>\n</div>',
        },
        {
          type: "ranking",
          name: "LN - Rank",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 7'] or {LN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Mohon urutkan aspek-aspek  berikut berdasarkan tingkat kepentingannya bagi perusahaan Anda dalam memilih produk Luncheon Napkin",
          description:
            "Drag & drop untuk mengurutkan atribut dari yang paling penting",
          isRequired: true,
          errorLocation: "bottom",
          choices: [
            {
              value: "1",
              text: "Kelembutan",
            },
            {
              value: "2",
              text: "Kekuatan",
            },
            {
              value: "3",
              text: "Kebersihan",
            },
            {
              value: "5",
              text: "Ukuran",
            },
            {
              value: "6",
              text: "Desain Kemasan",
            },
          ],
        },
        {
          type: "checkbox",
          name: "LN - Keunggulan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 7'] or {LN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          startWithNewLine: false,
          title:
            "Menurut Anda, apa saja keunggulan utama Luncheon Napkin Suparma dibandingkan dengan produk dari supplier lain?",
          description: "Pilih maksimal 3 opsi",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Kelembutan",
            },
            {
              value: "2",
              text: "Kekuatan",
            },
            {
              value: "3",
              text: "Kebersihan",
            },
            {
              value: "5",
              text: "Ukuran",
            },
            {
              value: "6",
              text: "Desain Kemasan",
            },
          ],
          maxSelectedChoices: 3,
        },
        {
          type: "boolean",
          name: "LN - Preferensi Tekstur",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 7'] or {LN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Karakteristik Luncheon seperti apa yang paling sesuai dengan kebutuhan operasional Anda?    ",
          isRequired: true,
          labelTrue: "Tidak Mudah Sobek",
          labelFalse: "Lembut di Mulut",
        },
        {
          type: "boolean",
          name: "LN - Preferensi Desain Kemasan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 7'] or {LN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Desain kemasan Luncheon Napkin seperti apa yang paling sesuai dengan kebutuhan operasional Anda?    ",
          isRequired: true,
          labelTrue: "Printed Logo",
          labelFalse: "Polos",
        },
        {
          type: "radiogroup",
          name: "LN - Preferensi Kemasan",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 7'] or {LN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Jenis kemasan Luncheon Napkin seperti apa yang paling sesuai dengan kebutuhan perusahaan Anda?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Kemasan plastik konvensional",
            },
            {
              value: "2",
              text: "Kemasan plastik ramah lingkungan (biodegradable)",
            },
            {
              value: "3",
              text: "Kemasan kardus atau kertas",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "LN - Preferensi Dispencer",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 7'] or {LN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          startWithNewLine: false,
          title:
            "Apakah perusahaan Anda tertarik untuk menggunakan wadah atau dispenser Luncheon Napkin yang disediakan oleh Suparma?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Ya, sudah menggunakan",
            },
            {
              value: "2",
              text: "Ya, ingin menggunakan",
            },
            {
              value: "3",
              text: "Tidak, belum membutuhkan",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "LN - Switching Behaviour",
          visibleIf:
            "{Used Tissue (End User)} anyof ['Item 7'] or {LN - Penggunaan DM} anyof ['Item 2', 'Item 1']",
          title:
            "Jika ada supplier lain yang menawarkan Luncheon Napkin dengan kualitas relatif setara dan harga 5% lebih murah, langkah apa yang paling mungkin dilakukan perusahaan Anda?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Tetap menggunakan Suparma",
            },
            {
              value: "2",
              text: "Mengalihkan sebagian pembelian",
            },
            {
              value: "3",
              text: "Beralih sepenuhnya ke supplier lain",
            },
          ],
        },
      ],
    },
    {
      name: "Kritik&Saran",
      elements: [
        {
          type: "html",
          name: "question11",
          html: '<div style="\nmargin:-38px -40px 30px -40px;\noverflow:hidden;\n">\n\n<img\nsrc="https://api.surveyjs.io/private/Surveys/files?name=3a24c14a-303e-43d6-8cb0-2f88ee3ea054"\nstyle="\nwidth:100%;\ndisplay:block;\nborder-radius:0;\n">\n</div>',
        },
        {
          type: "comment",
          name: "Suggestion",
          title: "Kritik & Saran",
          isRequired: true,
          errorLocation: "bottom",
          validators: [
            {
              type: "text",
              minLength: 5,
              maxLength: 500,
            },
          ],
          maxLength: 500,
        },
      ],
    },
  ],
  partialSendEnabled: true,
  questionErrorLocation: "bottom",
  showProgressBar: false,
  progressBarLocation: "belowheader",
  progressBarShowPageNumbers: true,
  progressBarNavigationTextLocation: "bottom",
  progressBarInheritWidthFrom: "survey",
  autoAdvanceEnabled: true,
  autoGrowComment: true,
  startSurveyText: "Start Survey",
  firstPageIsStartPage: true,
  widthMode: "responsive",
};
