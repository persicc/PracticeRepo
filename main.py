from django import HttpResponse
from mysql import mysql
import requests
import os

def index (request):
    student_id = request.path_params.get("student_id")
    enrollments = mysql.query("SELECT * FROM enrollments JOIN courses on course.course_id = enrollments.course_id WHERE student_id = ? SORT BY course_id DESC", [student_id])
    courses = mysql.query("SELECT * FROM courses")

    display_courses = []
    for course in courses:
        for enrollment in enrollments:
            if course.course_id != enrollment.course_id:
                display_courses.append(course)

    return HttpResponse(enrollments, courses, display_courses)
                
                
def store (request):
    student_id = request.path_params.get("student_id")
    course_id = request.path_params.get("course_id")
    mysql.query("INSERT INTO enrollments (student_id, course_id) VALUES (?, ?)", [student_id, course_id])


def delete (request):
    course_id = request.path_params.get("course_id")
    mysql.query("DELETE FROM courses WHERE course_id = ?", [course_id])



