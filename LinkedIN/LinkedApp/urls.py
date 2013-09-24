from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()




urlpatterns = patterns('',
    # Examples:


    url(r'^$', 'LinkedApp.views.main'),
    url(r'^what-is-linkedIN/$', 'LinkedApp.views.whatisLinkedIn'),
    url(r'^cookie-policy/$', 'LinkedApp.views.cookie_policy'),
    url(r'^user-agreement/$', 'LinkedApp.views.user_agreement'),
    url(r'^privacy-policy/$', 'LinkedApp.views.privacy_policy'),
    url(r'^join-in/$', 'LinkedApp.views.join_in'),
    url(r'^sign-in/$', 'LinkedApp.views.sign_in'),
    url(r'^password-reset/$', 'LinkedApp.views.reset_password'),
    url(r'^search-by-country/$', 'LinkedApp.views.search_by_country'),
    url(r'^default-for-links/$', 'LinkedApp.views.default_for_links'),
    # url(r'^$', 'LinkedIN.views.home', name='home'),
    # url(r'^LinkedIN/', include('LinkedIN.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),

)