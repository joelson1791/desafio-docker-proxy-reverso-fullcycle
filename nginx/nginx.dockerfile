FROM nginx

#RUN rm /etc/nginx/conf.d/default.conf

COPY default.conf /etc/nginx/conf.d/default.conf

#RUN mkdir /etc/nginx/conf.d/sites-enabled
#RUN mkdir /etc/nginx/conf.d/sites-available

#COPY api.conf /etc/nginx/conf.d/sites-available

#RUN ln -s /etc/nginx/conf.d/sites-available/api.conf /etc/nginx/conf.d/sites-enabled

#COPY nginx_corrigido.conf /etc/nginx/nginx.conf