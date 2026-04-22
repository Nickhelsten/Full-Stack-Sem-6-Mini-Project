INSERT INTO admin_users (username, email, role)
SELECT * FROM (
    SELECT 'admin', 'admin@eventplatform.com', 'ADMIN'
) AS temp
WHERE NOT EXISTS (
    SELECT username FROM admin_users WHERE username = 'admin'
);
