package com.example.demo.util;
import com.example.demo.model.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

@Component
public class TokenUtils {

    @Value("${app.name}")
    private String APP_NAME;

    @Value("${app.secret}")
    public String SECRET;

    @Value("Authorization")
    private String AUTH_HEADER;

    private SignatureAlgorithm SIGNATURE_ALGORITHM = SignatureAlgorithm.HS512;

    public String generateToken(User user) {
        return Jwts.builder()
                .setIssuer(APP_NAME)
                .setSubject(user.getUsername())
                .setIssuedAt(new Date())
                .claim("role", user.getRoles().get(0).getName())
                .claim("name", user.getPerson().getFirstName())
                .claim("id", user.getId())

                .signWith(SIGNATURE_ALGORITHM, SECRET).compact();

    }

    /**
     * Funkcija za preuzimanje JWT tokena iz zahteva.
     *
     * @param request HTTP zahtev koji klijent šalje.
     * @return JWT token ili null ukoliko se token ne nalazi u odgovarajućem zaglavlju HTTP zahteva.
     */
    public String getToken(HttpServletRequest request) {
        String authHeader = getAuthHeaderFromHeader(request);

        // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            return authHeader.substring(7); // preuzimamo samo token (vrednost tokena je nakon "Bearer " prefiksa)
        }

        return null;
    }

    /**
     * Funkcija za preuzimanje vlasnika tokena (korisničko ime).
     * @param token JWT token.
     * @return Korisničko ime iz tokena ili null ukoliko ne postoji.
     */
    public String getUsernameFromToken(String token) {
        String username;

        try {
            final Claims claims = this.getAllClaimsFromToken(token);
            username = claims.getSubject();
        } catch (ExpiredJwtException ex) {
            throw ex;
        } catch (Exception e) {
            username = null;
        }

        return username;
    }


    /**
     * Funkcija za čitanje svih podataka iz JWT tokena
     *
     * @param token JWT token.
     * @return Podaci iz tokena.
     */
    private Claims getAllClaimsFromToken(String token) {
        Claims claims;
        try {
            claims = Jwts.parser()
                    .setSigningKey(SECRET)
                    .parseClaimsJws(token)
                    .getBody();
        } catch (ExpiredJwtException ex) {
            throw ex;
        } catch (Exception e) {
            claims = null;
        }

        return claims;
    }


    /**
     * Funkcija za validaciju JWT tokena.
     *
     * @param token JWT token.
     * @param userDetails Informacije o korisniku koji je vlasnik JWT tokena.
     * @return Informacija da li je token validan ili ne.
     */
    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = getUsernameFromToken(token);

        return (username != null
                && username.equals(((User) userDetails).getEmail())
               );
    }

    /**
     * Funkcija za preuzimanje sadržaja AUTH_HEADER-a iz zahteva.
     *
     * @param request HTTP zahtev.
     *
     * @return Sadrzaj iz AUTH_HEADER-a.
     */
    public String getAuthHeaderFromHeader(HttpServletRequest request) {
        return request.getHeader(AUTH_HEADER);
    }
}
