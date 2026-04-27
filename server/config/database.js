const mysql = require('mysql2')

// 3) DB 정보 기재 
const conn = mysql.createConnection({
    host : 'project-db-campus.smhrd.com',
    user : 'cloud_study_teacher_KJY',
    password : 'smhrd', 
    port : 3307,
    database : 'cloud_study_teacher_KJY'
})

// conn.connect()


conn.connect((err) => {
    if (err) {
        console.error('❌ DB 연결 실패:', err.message);
    } else {
        console.log('✅ [project-db-campus] 연결 성공! 3307 포트 가동 중');
    }
});

// 서버 다운 방지를 위한 에러 리스너
conn.on('error', (err) => {
    if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'ECONNRESET') {
        console.log('🔄 DB 연결 유실로 인한 재연결 시도가 필요할 수 있습니다.');
    }
});

module.exports = conn;