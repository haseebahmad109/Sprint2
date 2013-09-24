# Create your views here.

from django.shortcuts import render_to_response


def main(request):
    return render_to_response('screen1(main page).html')


def whatisLinkedIn(request):
    return render_to_response('screen3(what is linkden page).html')


def cookie_policy(request):
    return render_to_response('cookies.html')


def user_agreement(request):
    return render_to_response('screen9 (User agreement).html')


def privacy_policy(request):
    return render_to_response('privacyPolicy.html')


def join_in(request):
    return render_to_response('screen4 (join in).html')


def sign_in(request):
    return render_to_response('screen5(sign in).html')


def reset_password(request):
    return render_to_response('screen6(passwordreset.html')


def search_by_country(request):
    return render_to_response('screen10(bu country).html')


def default_for_links(request):
    return render_to_response('DefaultForLinks.html')