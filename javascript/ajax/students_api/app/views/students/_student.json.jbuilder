json.extract! student, :id, :student_number, :first_name, :last_name, :created_at, :updated_at
json.url student_url(student, format: :json)
